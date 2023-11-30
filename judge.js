//"如果"你想要"讀大學"，就"繼續讀書“,不然就“去工作”
// if else 只給兩種選項選
let x =7;
let y = 6;


if(x == y ){
    console.log("她們相等")
} else {
    console.log("他們不相等")
}
//給兩種以上的選擇以上的話
if(x > y){
    console.log("左邊比較大")
}else if(x < y){
    console.log("右邊比較大")
}else{
    console.log("兩邊相等")
}


switch(x == y){
    case true:
        console.log("他們相等")
        break;
        default:
            console.log("他們不相等")
}

//switch  判斷
//"如果"你想要"讀大學"，就"繼續讀書“,不然就“去工作”
// switch(你想做的事情){
//     case 讀大學:
//         繼續讀書
//         break;
//         default:
//             去工作
//             break;
// }
switch(x){
    case 1:
        console.log("四")
        break;
    case 2:
        console.log("五")
        break;
    case 3:
        console.log("六")
        break;
    default:
        console.log("x" + x )
        break; 
}
// 變成判斷case哪個為true
switch(true){
    case x > y:
        console.log("左邊比較大")
        break;
    case x < y :
        console.log("右邊比較大")
        break;
    default:
        console.log("兩邊相等")
        break;
}