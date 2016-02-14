define(function () {
  return function() {
    this.render = function (d) {
      var el = document.createElement("div")
      d.appendChild(el)
      var s = "<h2>Meshflix</h2>"

      s += "<p>Visualisierung von A.L.F.R.E.D. Daten "
      s += "aus Mesh-Netzwerken</p>"

      s += "<p>Meshflix ist eine Weiterentwicklung des "
      s += "Meshviewer von tcatm</p>"

      s += "<h3>AGPL 3</h3>"

      s += "<p>Copyright (C) Nils Schneider</p>"
      s += "<p>Copyright (C) Matthias Fehl</p>"

      s += "<p>This program is free software: you can redistribute it and/or "
      s += "modify it under the terms of the GNU Affero General Public "
      s += "License as published by the Free Software Foundation, either "
      s += "version 3 of the License, or (at your option) any later version.</p>"

      s += "<p>This program is distributed in the hope that it will be useful, "
      s += "but WITHOUT ANY WARRANTY; without even the implied warranty of "
      s += "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the "
      s += "GNU Affero General Public License for more details.</p>"

      s += "<p>You should have received a copy of the GNU Affero General "
      s += "Public License along with this program. If not, see "
      s += "<a href=\"https://www.gnu.org/licenses/\">"
      s += "https://www.gnu.org/licenses/</a>.</p>"

      s += "<p>The source code is available at </p>"
      s += "<a href=\"https://github.com/freifunk-en/meshflix\">"
      s += "https://github.com/freifunk-en/meshflix</a>."

      el.innerHTML = s
    }
  }
})
