define(function () {
  return function (config, el, router, d) {
  function showStatImg(o, nodeId, neighId) {
    var content, caption

    if (o.thumbnail) {
      content = document.createElement("img")
      content.src = o.thumbnail.replace("{NODE_ID}", nodeId)
      content.src = o.thumbnail.replace("{NEIGH_ID}", neighId)
    }

    if (o.grafana) {
      content = document.createElement("iframe")
      content.width = "99%"
      content.height = "305px"
      content.scrolling = "no"
      content.frameBorder = "0"
      content.src = o.grafana.replace("{NEIGH_ID}", neighId).replace("{NODE_ID}", nodeId)
    }

    if (o.caption) {
      caption = o.caption.replace("{NODE_ID}", nodeId)
      caption = o.caption.replace("{NEIGH_ID}", neighId)

      if (!content)
        content = document.createTextNode(caption)
    }

    var p = document.createElement("p")

    if (o.href) {
      var link = document.createElement("a")
      link.target = "_blank"
      link.href = o.href.replace("{NODE_ID}", nodeId)
      link.href = o.href.replace("{NEIGH_ID}", neighId)
      link.appendChild(content)

      if (caption && o.grafana)
        link.title = caption

      if (caption && o.thumbnail)
        link.title = caption

      p.appendChild(link)
    } else
      p.appendChild(content)

    return p
  }
    var h2 = document.createElement("h2")
    var a1 = document.createElement("a")
    a1.href = "#"
    a1.onclick = router.node(d.source.node)
    a1.textContent = d.source.node.nodeinfo.hostname
    h2.appendChild(a1)
    h2.appendChild(document.createTextNode(" – "))
    var a2 = document.createElement("a")
    a2.href = "#"
    a2.onclick = router.node(d.target.node)
    a2.textContent = d.target.node.nodeinfo.hostname
    h2.appendChild(a2)
    el.appendChild(h2)

    var attributes = document.createElement("table")
    attributes.classList.add("attributes")

    attributeEntry(attributes, "TQ", showTq(d))
    attributeEntry(attributes, "Entfernung", showDistance(d))
    attributeEntry(attributes, "VPN", d.vpn ? "ja" : "nein")
    var hw1 = dictGet(d.source.node.nodeinfo, ["hardware", "model"])
    var hw2 = dictGet(d.target.node.nodeinfo, ["hardware", "model"])
    attributeEntry(attributes, "Hardware", (hw1 != null ? hw1 : "unbekannt") + " – " + (hw2 != null ? hw2 : "unbekannt"))

    el.appendChild(attributes)

    if (config.nodeLinks)
      config.nodeLinks.forEach( function (nodeLink) {
        var h4 = document.createElement("h4")
        h4.textContent = nodeLink.name
        el.appendChild(h4)
        el.appendChild(showStatImg(nodeLink, d.source.node.nodeinfo.node_id, d.target.node.nodeinfo.node_id))
      })
  }
})
