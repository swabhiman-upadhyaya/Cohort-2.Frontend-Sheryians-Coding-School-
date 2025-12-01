let input = document.querySelector("input")
let h2 = document.querySelector("h2")

let a = new Audio("./audio/a.mp3")
let b = new Audio("./audio/b.mp3")
let c = new Audio("./audio/c.mp3")
let d = new Audio("./audio/d.mp3")
let e = new Audio("./audio/e.mp3")
let f = new Audio("./audio/f.mp3")
let g = new Audio("./audio/g.mp3")
let h = new Audio("./audio/h.mp3")
let i = new Audio("./audio/i.mp3")
let j = new Audio("./audio/j.mp3")
let k = new Audio("./audio/k.mp3")
let l = new Audio("./audio/l.mp3")
let m = new Audio("./audio/m.mp3")
let n = new Audio("./audio/n.mp3")
let o = new Audio("./audio/o.mp3")
let p = new Audio("./audio/p.mp3")
let q = new Audio("./audio/q.mp3")
let r = new Audio("./audio/r.mp3")
let s = new Audio("./audio/s.mp3")
let t = new Audio("./audio/t.mp3")
let u = new Audio("./audio/u.mp3")
let v = new Audio("./audio/v.mp3")
let w = new Audio("./audio/w.mp3")
let x = new Audio("./audio/x.mp3")
let y = new Audio("./audio/y.mp3")
let z = new Audio("./audio/z.mp3")

input.addEventListener("keydown", function (keydownObj) {
    switch (keydownObj.key) {
        case "a": a.play(); break;
        case "b": b.play(); break;
        case "c": c.play(); break;
        case "d": d.play(); break;
        case "e": e.play(); break;
        case "f": f.play(); break;
        case "g": g.play(); break;
        case "h": h.play(); break;
        case "i": i.play(); break;
        case "j": j.play(); break;
        case "k": k.play(); break;
        case "l": l.play(); break;
        case "m": m.play(); break;
        case "n": n.play(); break;
        case "o": o.play(); break;
        case "p": p.play(); break;
        case "q": q.play(); break;
        case "r": r.play(); break;
        case "s": s.play(); break;
        case "t": w.play(); break;
        case "u": u.play(); break;
        case "v": v.play(); break;
        case "w": w.play(); break;
        case "x": x.play(); break;
        case "y": y.play(); break;
        case "z": z.play(); break;
        default:
            h2.innerHTML = "You've not enter any of the 26 alphabets-- "
            w.play();
    }
})