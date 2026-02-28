let should = false
let multi = 100000000
const luckb = document.getElementById("lg")
const crys = document.getElementById("cd")
const topa = document.getElementById("tg")
let bool = false
let can = true
let incut = false
const aul = document.getElementById("aura-list")
let rolls = 0
let boost = 0
const hp = document.getElementById("hpot")
const rollste = document.getElementById("RTex")
const rollb = document.getElementById("clickity")
let hpused = false

hp.onclick = (e) => {
    hpused = true
    boost += 250000
}

document.oncontextmenu = (e) => {
    e.preventDefault()
}

const auras = {
     Common: 0,
    Good: 0,
    Great: 0,
    Rare: 0,
    Divinus: 0,
    Crystalized: 0,
    Rage: 0,
    Topaz: 0,
    Emerald: 0,
    Diaboli: 0,
    Ash: 0,
    Siderium: 0,
    Quartz: 0,
    Powered: 0,
    Watt: 0,
    Natilus: 0,
    Devil: 0,
    Bounded: 0,
    Kyawthuite: 0,
    Arcane: 0,
    Virtual: 0,
    Poseidon: 0,
    Helios: 0,
    Legacy: 0,
    Ethereal: 0,
    Sentinal: 0,
    Radiant: 0,
    Archangel: 0,
    Overdrive: 0,
    Pixelation: 0,
}

const craftableitems = {
    luck_glove: {
        displayName:  "Luck Glove",
        color: "green",
        ricepe: {
            Common: 5,
            Good: 3,
            Great: 1
        }
        
    },
    crystalized_device: {
        displayName:  "Crystalized Device",
        color: "purple",
        ricepe: {
            Common: 15,
            Good: 10,
            Great: 5,
            Rare: 3,
            Crystalized: 1
        }
        
    },
    topaz_device: {
        displayName:  "Topaz Device",
        color: "brown",
        ricepe: {
            Good: 30,
            Great: 25,
            Rare: 20,
            Divinus: 15,
            Crystalized: 10,
            Rage: 7,
            Topaz: 3
        }
        
    },
    flex_gauntlet: {
        displayName: "Flex Gauntlet",
        color: "gray",
        ricepe: {
            Rare: 50,
            Divinus: 25,
            Rage: 15,
            Emerald: 10,
            Diaboli: 5
        }
    }
}

const craftingmenu = document.getElementById("crafting_menu")
craftingmenu.style.visibility = "hidden"

for(const item in craftableitems) {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const recilist = document.createElement("ul")
    const button = document.createElement("button")
    for (const ingredent in craftableitems[item].ricepe) {
        const item_rec = document.createElement("li")
        item_rec.className = "item_ingr"
        recilist.appendChild(item_rec)
        item_rec.textContent = ingredent + " x "  + craftableitems[item].ricepe[ingredent]
        item_rec.dataset.name = ingredent
        item_rec.dataset.count = craftableitems[item].ricepe[ingredent]
    }
    recilist.className = "item-recipe"
    div.className = "item"
    craftingmenu.appendChild(div)
    h3.textContent = craftableitems[item].displayName
    div.appendChild(h3)
    div.appendChild(recilist)
    h3.className = "item-name"
    div.appendChild(button)
    button.className = "item-button"
    button.disabled = true
    button.textContent = "Craft"
    console.log(item)
}


luckb.onclick = (e) => {
    
    if (luckb.style.visibility == "hidden") {
        console.log("nah")
    }
    else {
        bool = !bool
        if (bool) {
            multi = 16
        }
        else {
            multi = 1
        }
    }
}

crys.onclick = (e) => {
    
    if (crys.style.visibility == "hidden") {
        console.log("nah")
    }
    else {
        bool = !bool
        if (bool) {
            multi = 66
        }
        else {
            multi = 1
        }
    }
}

topa.onclick = (e) => {
    
    if (topa.style.visibility == "hidden") {
        console.log("nah")
    }
    else {
        bool = !bool
        if (bool) {
            multi = 350
        }
        else {
            multi = 1
        }
    }
}

function roll() {
    multi += boost
    if (can == true) {
         document.getElementById("rolb").setAttribute("style","opacity:0; -moz-opacity:0; filter:alpha(opacity=0)")
        let maths = Math.random() * 512
        maths /= multi
        let text
        let rarity
        let color
        const kso = document.getElementById("100k")
        const kso2 = document.getElementById("1m")
        const kso3 = document.getElementById("10m")
        const kso4 = document.getElementById("100m")
        const kso5 = document.getElementById("100msound")
        const kso6 = document.getElementById("pixelmus")
        const kso7 = document.getElementById("eqmus")
        const star = document.getElementById("star100k")
        should = false
        should2 = false
        if (maths <= .03125) {
            incut = true
            setTimeout(() => {
                incut = false
            }, 7999);
        }
        if (maths > 256) {
            should = true
            text = "Common"
            rarity = "1 In 2"
            color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Common += 1
        }
        else if (maths >= 128) {
            should = false
            text = "Good"
            rarity = "1 In 4"
            color = document.body.style.backgroundColor = "rgba(131, 185, 109, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Good += 1
        }
        else if (maths >= 64) {
            should = false
            text = "Great"
            rarity = "1 In 8"
            color = document.body.style.backgroundColor = "rgba(72, 97, 63, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Great += 1
        }
        else if (maths >= 32) {
            should = false
            text = "Rare"
            rarity = "1 In 16"
            color = document.body.style.backgroundColor = "rgba(0, 72, 206, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Rare += 1
        }
        else if (maths >= 16) {
            should = false
            text = "Divinus"
            rarity = "1 In 32"
            color = document.body.style.backgroundColor = "rgba(204, 193, 96, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Divinus += 1
        }
        else if (maths >= 8) {
            should = false
            text = "Crystalized"
            rarity = "1 In 64"
            color = document.body.style.backgroundColor = "rgba(210, 95, 255, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Crystalized += 1
        }
        else if (maths >= 4) {
            should = false
            text = "Rage"
            rarity = "1 In 128"
            color = document.body.style.backgroundColor = "rgba(255, 0, 0, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Rage += 1
        }
        else if (maths >= 2) {
            should = false
            text = "Topaz"
            rarity = "1 In 256"
            color = document.body.style.backgroundColor = "rgba(143, 98, 0, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Topaz += 1
        }
        else if (maths >= 1) {
            should = false
            text = "Emerald"
            rarity = "1 In 512"
            color = document.body.style.backgroundColor = "rgba(21, 255, 0, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Emerald += 1
        }
        else if (maths >= .5) {
            should = false
            text = "Diaboli"
            rarity = "1 In 1024"
            color = document.body.style.backgroundColor = "rgba(136, 0, 0, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Diaboli += 1
        }
        else if (maths >= .25) {
            should = false
            text = "Ash"
            rarity = "1 In 2048"
            color = document.body.style.backgroundColor = "rgba(116, 116, 116, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Ash += 1
        }
        else if (maths >= .125) {
            should = false
            text = "Siderium"
            rarity = "1 In 4096"
            color = document.body.style.backgroundColor = "rgba(152, 76, 196, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Siderium += 1
        }
        else if (maths >= .0625) {
            should = false
            text = "Quartz"
            rarity = "1 In 8192"
            color = document.body.style.backgroundColor = "rgba(240, 94, 215, 1)"
            const name = document.getElementById("ht")
            name.textContent = text
            const rar = document.getElementById("hth")
            rar.textContent = rarity
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Quartz += 1
        }
        else if (maths >= .03125) {
            incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Powered"
            rarity = "1 In 16384"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Powered += 1
            color = document.body.style.backgroundColor = "rgba(14, 14, 14, 1)"
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(212, 212, 212, 1)"
                    document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                    incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .015625) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Watt"
            rarity = "1 In 32768"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Watt += 1
            color = document.body.style.backgroundColor = "rgba(5, 9, 12, 1)"
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(72, 159, 165, 1)"
                    document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                    incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
            
        }
        else if (maths >= .0078125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Nautilus"
            rarity = "1 In 65536"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(18, 23, 34, 1)"
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Natilus += 1
            color = document.body.style.backgroundColor = "rgba(13, 15, 26, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(74, 103, 167, 1)"
                    document.getElementById("star100k").setAttribute("style","opacity:0 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00390625) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Undead - Devil"
            rarity = "1 In 131072"
            color = document.body.style.backgroundColor = "rgba(34, 18, 18, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Devil += 1
            color = document.body.style.backgroundColor = "rgba(26, 13, 13, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(127, 165, 65, 1)"
                    
                    document.getElementById("star100k").setAttribute("style","opacity:0 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .001953125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Bounded"
            rarity = "1 In 262144"
            color = document.body.style.backgroundColor = "rgba(0, 4, 255, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Bounded += 1
            color = document.body.style.backgroundColor = "rgba(0, 0, 51, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(21, 0, 141, 1)"
                    document.getElementById("star100k").setAttribute("style","opacity:0 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000976525) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should = true
            text = "Kyawthuite"
            rarity = "1 In 524288"
            color = document.body.style.backgroundColor = "rgba(52, 0, 82, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Kyawthuite += 1
            color = document.body.style.backgroundColor = "rgba(16, 0, 24, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should == true) {
                kso.play()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(99, 0, 165, 1)"
                    document.getElementById("star100k").setAttribute("style","opacity:0 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8300); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00048828125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Arcane"
            rarity = "1 In 1048576"
            color = document.body.style.backgroundColor = "rgba(25, 64, 119, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(9, 12, 22, 1)"
            document.getElementById("bg").backgroundColor = color
            auras.Arcane += 1
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(28, 38, 65, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000244140625) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Virtual"
            rarity = "1 In 2097152"
            color = document.body.style.backgroundColor = "rgba(68, 116, 184, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(142, 170, 204, 1)"
            document.getElementById("bg").backgroundColor = color
            auras.Virtual += 1
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(79, 101, 160, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .0001220703125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Poseidon"
            rarity = "1 In 4194304"
            color = document.body.style.backgroundColor = "rgba(34, 59, 95, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Poseidon += 1
            color = document.body.style.backgroundColor = "rgba(9, 14, 87, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(37, 80, 199, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00006103515625) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Helios"
            rarity = "1 In 8388608"
            color = document.body.style.backgroundColor = "rgba(136, 112, 45, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Helios += 1
            color = document.body.style.backgroundColor = "rgba(56, 43, 18, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(219, 170, 80, 1)"
                    kso2.pause()
                    kso2.currentTime = 0
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000030517578125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Arcane - LEGACY"
            rarity = "1 In 16777216"
            color = document.body.style.backgroundColor = "rgba(48, 86, 158, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Legacy += 1
            color = document.body.style.backgroundColor = "rgba(98, 148, 214, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(56, 167, 211, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso3.play()
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000030517578125) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Arcane - LEGACY"
            rarity = "1 In 16777216"
            color = document.body.style.backgroundColor = "rgba(48, 86, 158, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Legacy += 1
            color = document.body.style.backgroundColor = "rgba(98, 148, 214, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(56, 167, 211, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso3.play()
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .0000152587890625) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Ethereal"
            rarity = "1 In 33554432"
            color = document.body.style.backgroundColor = "rgba(148, 81, 139, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Ethereal += 1
            color = document.body.style.backgroundColor = "rgba(85, 45, 85, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(207, 99, 211, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso3.play()
                    can = true
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00000762939453) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "SENTINAL"
            rarity = "1 In 67108864"
            color = document.body.style.backgroundColor = "rgba(24, 26, 146, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Sentinal += 1
            color = document.body.style.backgroundColor = "rgba(0, 1, 19, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.play()
                kso.pause()
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(30, 17, 143, 1)"
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso3.play()
                    can = true
                     incut = false
                    
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00000381469727) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Starscourge - Radiant"
            rarity = "1 In 134217728"
            color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            auras.Radiant += 1
            color = document.body.style.backgroundColor = "rgba(119, 130, 153, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                document.getElementById("radst1").setAttribute("style","opacity:.15; -moz-opacity:0.5; filter:alpha(opacity=50)")
                document.getElementById("radst2").setAttribute("style","opacity:.15; -moz-opacity:0.5; filter:alpha(opacity=50)")
                document.getElementById("radst3").setAttribute("style","opacity:.15; -moz-opacity:0.5; filter:alpha(opacity=50)")
                document.getElementById("radst4").setAttribute("style","opacity:.15; -moz-opacity:0.5; filter:alpha(opacity=50)")
                setTimeout(() => {
                    document.getElementById("radp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("radp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    color = document.body.style.backgroundColor = "rgba(218, 224, 255, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    can = true
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00000190734863) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "ARCHANGEL"
            rarity = "1 In 268435456"
            auras.Archangel += 1
            document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(185, 190, 112, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(202, 181, 113, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(227, 235, 122, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .00000190734863) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "ARCHANGEL"
            rarity = "1 In 268435456"
            auras.Archangel += 1
            document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(185, 190, 112, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(202, 181, 113, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(227, 235, 122, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000000953674317) {
             incut = true
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Matrix - OV3RDR|V3"
            rarity = "1 In 536870912"
            auras.Overdrive += 1
            document.getElementById("moe1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe2").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe3").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe4").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe5").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(109, 23, 23, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(104, 0, 0, 1)"
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                setTimeout(() => {
                    document.getElementById("mop1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("mop1").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(255, 0, 0, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                    document.getElementById("moe1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe5").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }
        }
        else if (maths >= .000000476837158) {
             incut = true
            kso6.play()
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "PIXELATION"
            auras.Pixelation += 1
            rarity = "[GAME START!] 1 In 1073741824"
            document.getElementById("moe1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe5").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(255, 0, 0, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 0, 0, 1)"
            }, 1000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 44, 0, 1)"
            }, 2000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 90, 0, 1)"
            }, 3000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(31, 97, 0, 1)"
            }, 4000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 97, 76, 1)"
            }, 5000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 86, 97, 1)"
            }, 6000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 6, 97, 1)"
            }, 7000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(170, 0, 192, 1)"
            }, 8000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 0, 0, 1)"
            }, 9000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 44, 0, 1)"
            }, 10000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(97, 90, 0, 1)"
            }, 11000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(31, 97, 0, 1)"
            }, 12000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 97, 76, 1)"
            }, 13000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 86, 97, 1)"
            }, 14000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 6, 97, 1)"
            }, 15000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(170, 0, 192, 1)"
            }, 16000 / 2);
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:.4; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:.4; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(255, 143, 68, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                    document.getElementById("moe1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe5").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }

        }
        else if (maths >= .000000238418579) {
             incut = true
            kso7.play()
            const name = document.getElementById("ht")
            name.textContent = ""     
            const rar = document.getElementById("hth")
            rar.textContent = ""   
            should2 = true 
            should = false
            text = "Equinox"
            auras.Pixelation += 1
            rarity = "[EQUILLBRIUM INCARNATE]"
            document.getElementById("moe1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("moe5").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("radst4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            color = document.body.style.backgroundColor = "rgba(83, 83, 83, 1)"
            document.getElementById("star1m").setAttribute("style","opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("star100k").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
            document.getElementById("sm1").setAttribute("style","opacity:.3; -moz-opacity:0.5; filter:alpha(opacity=50)")
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 1000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 2000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 3000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 4000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 5000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 6000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 7000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 8000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 9000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 10000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 11000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 0, 0, 1)"
            }, 12000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 13000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 0, 0, 1)"
            }, 14000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(255, 255, 255, 1)"
            }, 15000 / 2);
            setTimeout(() => {
                color = document.body.style.backgroundColor = "rgba(0, 0, 0, 1)"
            }, 16000 / 2);
            document.getElementById("bg").backgroundColor = color
            if (should2 == true) {
                kso2.pause()
                kso.pause()
                kso3.pause()
                kso4.play()
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:.4; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7000);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 7500);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:.4; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8000);
                setTimeout(() => {
                    document.getElementById("ppu").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("mop1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("arp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("radp1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8300);
                setTimeout(() => {
                    color = document.body.style.backgroundColor = "rgba(87, 87, 87, 1)"
                    kso3.pause()
                    document.getElementById("star1m").setAttribute("style","opacity:1 -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("sm1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    name.textContent = text
                    rar.textContent = rarity
                    kso5.play()
                     incut = false
                    document.getElementById("moe1").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe2").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe3").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe4").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                    document.getElementById("moe5").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)")
                }, 8310); 
                document.body.style.backgroundColor = color
                
            }

        }
        console.log(maths)
        console.log(multi)
        console.log(auras)
        console.log(text)
        can = false
        if (incut == true) {
                setTimeout(() => {
                    document.getElementById("rolb").setAttribute("style","opacity:1; -moz-opacity:1; filter:alpha(opacity=100)")
                    can = true
                    multi -= boost
                    rolls += 1
                    rollste.textContent = "Rolls: " + rolls
                     setTimeout(() => {
                         boost = 0
                    }, 1);
                }, 10000);
            }
            else if (incut == false) {
                setTimeout(() => {
                    document.getElementById("rolb").setAttribute("style","opacity:1; -moz-opacity:1; filter:alpha(opacity=100)")
                    can = true
                    multi -= boost
                    rolls += 1
                    rollste.textContent = "Rolls: " + rolls
                    setTimeout(() => {
                         boost = 0
                    }, 1);
                }, 1000);
            }
    }
    else {
        console.log("Cooldown!")
    }
    aul.innerHTML = null
    for (const aura in auras) {
        if (auras[aura] != 0) {
            const li= document.createElement("li")
            li.textContent = aura + ":" + auras[aura]
            aul.appendChild(li)
        }
    }
}
rolb.onclick = (e) => {
    roll()
}

const sirkul = document.getElementById("Circol")

sirkul.style.visibility = "hidden"

function tp() {
    let Mrathers = Math.random() * 100
    sirkul.style.left="" + Mrathers + "%"
    sirkul.style.top="" + Mrathers + "%"
    console.log(Mrathers)
}

