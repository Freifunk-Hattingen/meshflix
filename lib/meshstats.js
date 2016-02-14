define(function () {
  return function (config) {
    var self = this
    var stats, stats2, timestamp

    self.setData = function (d) {
      var totalOnlineNodes = sum(d.nodes.all.filter(online).map(one))
      var totalNewNodes = sum(d.nodes.new.map(one))
      var totalLostNodes = sum(d.nodes.lost.map(one))
      var totalClients = sum(d.nodes.all.filter(online).map( function (d) {
        return d.statistics.clients
      }))

      var nodetext = [{ count: totalNewNodes, label: "neu" },
                      { count: totalLostNodes, label: "inaktiv" }
                     ].filter( function (d) { return d.count > 0 } )
                      .map( function (d) { return [d.count, d.label].join(" ") } )
                      .join(", ")

      stats.textContent = totalOnlineNodes + " Aktive Zugangspunkte " +
                          "(" + nodetext + ") "

      stats2.textContent = totalClients + " Verbundene Benutzer"

      timestamp.textContent = "Zuletzt aktualisiert am " + d.timestamp.format("LLLL") + "."
    }

    self.render = function (el) {
      var h2 = document.createElement("h2")
      h2.textContent = config.siteName
      el.appendChild(h2)

      var p = document.createElement("p")
      el.appendChild(p)
      stats = document.createTextNode("")
      p.appendChild(stats)
      p.appendChild(document.createElement("br"))
      stats2 = document.createTextNode("")
      p.appendChild(stats2)
      p.appendChild(document.createElement("br"))
      timestamp = document.createTextNode("")
      p.appendChild(timestamp)

    }

    return self
  }
})
