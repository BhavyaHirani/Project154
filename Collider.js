AFRAME.registerComponent("fish", {
    init: function () {
        for (var i = 1; i <= 10; i++) {
            const id = `hurdle${i}`;
    
            const posX = (Math.random() * 100 + (-50))
            const posY = (Math.random() * 5 + 5)
            const posZ = (Math.random() * 60 + (-40))
    
            var position = { x: posX, y: posY, z: posZ };

            this.floatingFish(id, position);
      }
    },
    floatingFish: (id, position) => {
        var terrainEl = document.querySelector("#terrain")
        var fishEl = document.createElement("a-entity")

        fishEl.setAttribute("id", id)
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf")
        fishEl.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 })

        terrainEl.appendChild(fishEl)
    },
  });
  
