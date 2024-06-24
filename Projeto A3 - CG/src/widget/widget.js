import { color, getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget00.js"

function widget(key, draw) {
    
    
    let nextColor = getColorIterator(key);

    // fundo
    draw.rect().size(1000, 1000).move(0, 0).fill(nextColor()).opacity(0.5);

    // asfalto
    draw.rect().size(1000, 250).move(0, 750).fill('#505050').opacity(1);
    
    const line = draw.line(0, 880, window.innerWidth, 880).stroke({ width: 10, color: '#FFFF00' });
    line.opacity(1);
    
    // triangulo
    //draw.polygon([[250, 400], [600, -120], [1000, 400]]).fill(nextColor()).move(150, 250).opacity(0.5);

    //lua
    let luaX = 470*key.next()/1000
    draw.circle().size(200+(key.next()/1000*200)).move(luaX+100, 100).fill('#F8F8FF').opacity(0.9);

    let carroX = 470*key.next()/1000
    //rodas
    draw.circle().size(100).move(carroX+100, 890).fill('#1C1C1C').opacity(1);
    draw.circle().size(100).move(carroX+400, 890).fill('#1C1C1C').opacity(1);
    //carro
    draw.circle().size(200).move(carroX+200, 700).fill(`RGB(${key.next256()},${key.next256()},${key.next256()})`).opacity(1);
    draw.rect(400, 100).move(carroX+100, 820).fill(`RGB(${key.next256()},${key.next256()},${key.next256()})`).opacity(1);
    draw.circle().size(50).move(carroX+450, 820).fill('#F8F8FF').opacity(1);


    //draw.circle().size(200).move(100, 100).fill('#F8F8FF').opacity(0.9);
    
    // Star
    for(let i=0; i < 40; i++) {
        let x = key.next()-30
        let y = 620*key.next()/1000
        console.log({x,y});
        draw.path('M10 40 L40 40 L50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 Z')
        .move(x,y)
        .fill(nextColor())
        .opacity(0.6)
        .scale(0.5*(key.next()/1000+0.7)); // Scale by a factor of 2    
    }



//lua

// Heart
//draw.path('M10,30 A20,20 0 0,1 50,30 A20,20 0 0,1 90,30 Q90,60 50,90 Q10,60 10,30 Z')
//.move(key.next()/1000 * window.innerWidth, key.next()/1000 * window.innerHeight)
//.fill(nextColor())
//.opacity(1)
//.scale(2); // Scale by a factor of 2
//
//draw.path('M10,30 A20,20 0 0,1 50,30 A20,20 0 0,1 90,30 Q90,60 50,90 Q10,60 10,30 Z')
//.move(key.next()/1000 * window.innerWidth, key.next()/1000 * window.innerHeight)
//.fill(nextColor())
//.opacity(1)
//.scale(3);
//
//draw.path('M10,30 A20,20 0 0,1 50,30 A20,20 0 0,1 90,30 Q90,60 50,90 Q10,60 10,30 Z')
//.move(key.next()/1000 * window.innerWidth, key.next()/1000 * window.innerHeight)
//.fill(nextColor())
//.opacity(1)
//.scale(4);
//
//const path = draw.path('M10 80 Q 95 10 180 80 T 330 80').fill('none').stroke({ width: 1, color: '#000' });
//path.move(key.next()/1000 * window.innerWidth, key.next()/1000 * window.innerHeight);
//
//const line = draw.line(0, 0, key.next()/1000 * window.innerWidth, key.next()/1000 * window.innerHeight).stroke({ width: 1, color: 'RGB(0,0,255)' });
//line.opacity(0.5);


}

export default widget