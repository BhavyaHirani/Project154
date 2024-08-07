AFRAME.registerComoponent("coins", {
    init : function(){
        for(var i = 1; i <= 10; 1 ++){
            const id = `coin${i}`

            const posX = (Math.random() * 100 + (-50))
            const posY = (Math.random() * 5 + 5)
            const posZ = (Math.random() * 60 + (-40))

            const position = { x: posX, y: posY, z: posZ }

            this.createCoins(id, position)
        }
    },
    createCoins: function(id, position){
        const treasureEntity = document.querySelector("#treasureCoins")
        var coinEl = document.createElement("a-entity")

        coinEl.setAttribute("id", id)
        coinEl.setAttribute("position", position)
        coinEl.setAttribute("gltf-model", "./assets/coin/scene.gltf")
        coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 })
        coinEl.setAttribute("animation", {property: "rotation", to: "0 360 0", loop: "true", dur: 1000})

        treasureEntity.appendChild(coinEl)
    }
})