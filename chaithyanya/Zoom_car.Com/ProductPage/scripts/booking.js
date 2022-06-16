let append = document.querySelector("#cars");
  let maindata = JSON.parse(localStorage.getItem("bookingdata"));
  let arr = [];
  arr.push(maindata);
  console.log(maindata);

  arr.map(function (el) {
    let mainDiv = document.createElement("div");

    let topDiv = document.createElement("div");
    topDiv.id = "topDiv";
    let div1 = document.createElement("div");
    div1.id = "div1";
    logodiv = document.createElement("div");
    logodiv.id = "logodiv";
    logo = document.createElement("img");
    logo.id = "logo";
    let div2 = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.id = "h3";
    h3.innerText = el.name;

    let oil = document.createElement("p");
    oil.innerText = el.fuel;

    logo.src =
      "https://zoomcar-assets.zoomcar.com/images/original/4c611ba1fb54d1e42553020d9022e5ab2dac14ea.png?1584455110";
    logodiv.append(logo, oil);
    let image = document.createElement("img");
    image.src = el.img;
    image.id = "img";

    div1.append(h3, logodiv);
    div2.append(image);
    topDiv.append(div1, div2);
    // top div part end here /.................................

    //date divs start here.......................
    let dateS = document.createElement("div");
    let dateE = document.createElement("div");

    dateS.innerText = "02-April-2022, 12:30 AM";
    dateS.id = "date";
    dateE.innerText = "03-April-2022, 04:30 PM";
    //date divs end here.......................

    // fuel & line stat here
    let = document.createElement("div");
    let fuel = document.createElement("div");
    fuel.id = "fuel_id";
    let line = document.createElement("p");
    let fimg = document.createElement("img");
    fimg.id = "f_img";
    fimg.src =
      "https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852";
    line.innerText = "Unlimited Kms without Fuel";

    fuel.append(fimg, line);

    // fuel & line end here..................
    // Rating start here................
    let rate = document.createElement("p");
    rate.innerText = "⭐ " + el.Rating;
    rate.id = "rating";

    // Rating end here............................................
    // blue line start here
    let lineDiv = document.createElement("div");
    lineDiv.id = "line";
    let bLine = document.createElement("p");
    bLine.innerText =
      "You will get a clean and sanitized car. Exact car location will be shared post-booking";

    lineDiv.append(bLine);

    // blue line end here

    let home = document.createElement("h3");

    mainDiv.append(topDiv, dateS, dateE, fuel, rate, lineDiv);
    home.innerText = "Home Delivery";
    let maindiv = document.createElement("div");
    maindiv.append(home);
    maindiv.id = "main";

    let deldiv = document.createElement("div");
    let lets = document.createElement("div");
    let c_img = document.createElement("img");
    c_img.id = "f_img";
    let p = document.createElement("p");
    let p1 = document.createElement("p");

    p.innerText = "Delivery & Pick Up";
    p1.innerText =
      "HD option available for bookings starting at-least 3 hours after the current time";
    p1.id = "p1";
    c_img.src =
      "https://zoomcar-assets.zoomcar.com/images/original/199387698b88c2a9c7a4cfd0aedebd2aaae695c5.png?1608270423";
    lets.append(p, p1);
    deldiv.append(c_img, lets);
    deldiv.id = "del";

    let add = document.createElement("h3");
    add.innerText = "Add Ons";

    let adddiv = document.createElement("div");
    let lets1 = document.createElement("div");
    let c_img1 = document.createElement("img");
    c_img1.id = "f_img";
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p2.innerText = "Become Supermiler Elite for ₹999";
    p3.innerText =
      "Get Benefit of Free Home Delivery, Cancellation and extra Z-Points";
    p3.id = "p3";

    c_img1.src =
      "https://zoomcar-assets.zoomcar.com/images/original/44aaa85f73a3bbb533d0beb2cc27b8b261d82acb.png?1591953667";
    lets1.append(p2, p3);
    lets1.id = "lets";

    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "chinna";
    input.value = "999";
    adddiv.append(c_img1, lets1, input);
    adddiv.id = "del1";

    let damDiv = document.createElement("div");
    let damDiv1 = document.createElement("div");
    damDiv1.id = "id";
    let dam = document.createElement("h3");
    dam.innerText = "Damage Protection Package";

    let c_img2 = document.createElement("img");
    c_img2.id = "f_img";
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");

    p4.innerText = "Standard (₹255)";
    p5.innerText = "You pay up to INR 1499 in case of any damage";
    p5.id = "p3";
    p6.innerText = "RECOMMENDED FOR YOU";
    p6.id = "green";

    let input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.id = "input1";

    c_img2.src =
      "https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237";
    damDiv.append(p4, p5, p6);
    damDiv1.append(c_img2, damDiv, input1);

    // ...........................

    let peace = document.createElement("div");
    let peace1 = document.createElement("div");
    peace1.id = "id";
    let P_img = document.createElement("img");
    P_img.id = "f_img";
    let a = document.createElement("p");
    let b = document.createElement("p");

    a.innerText = "Peace of Mind (₹414)";
    b.innerText = "You pay up to INR 249 in case of any damage";
    b.id = "p3";

    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.id = "inp";

    P_img.src =
      "https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237";
    peace.append(a, b);
    peace1.append(P_img, peace, inp);

    // question
    let Q_A_div = document.createElement("div");
    let qn = document.createElement("p");
    qn.innerText = "How Damage Protection Works?";
    let ans = document.createElement("p");
    ans.innerText =
      "Incase of accidents or any damage to the car, Zoomcar will take care of the expenses. You pay the minimum amount as per the package and we take care of the rest. Higher the package you select, lower the risk at your end for any damage. Please note that this is applicable solely in the case of damage to the vehicle and does not cover for any other third party loss.";
    ans.id = "ans";
    Q_A_div.append(qn, ans);
    Q_A_div.id = "qn";

    let mind = document.createElement("h3");
    mind.innerText = "Keep In Mind";

    let fuel1 = document.createElement("div");
    fuel1.id = "fuel_id";
    let line1 = document.createElement("p");
    let fimg1 = document.createElement("img");
    fimg1.id = "f_img";
    fimg1.src =
      "https://zoomcar-assets.zoomcar.com/images/original/0ebf53a526da3baa9621436223d17ee0a712495e.png?1584454768";
    line1.innerText = "Driving License Mandatory";

    fuel1.append(fimg1, line1);

    let f_div1 = document.createElement("div");
    let x = document.createElement("p");
    x.id = "x";
    let y = document.createElement("a");
    y.id = "y";
    let fuel2 = document.createElement("div");
    fuel2.id = "fuel_id";
    let line2 = document.createElement("p");
    let fimg2 = document.createElement("img");
    fimg2.id = "f_img";
    fimg2.src =
      "https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852";
    line2.innerText = "Unlimited Kms without Fuel";
    x.innerText =
      "Fare is inclusive of all taxes. Kindly return the car at the same fuel level as the trip start time";
    y.innerHTML = "See Details";
    y.href =
      "../../../policy and help page/Privacy Policy/Fleet Policy/index.html";
    f_div1.append(line2, x, y);
    fuel2.append(fimg2, f_div1);

    let f_div2 = document.createElement("div");
    let m = document.createElement("p");
    m.id = "x";
    let n = document.createElement("a");
    n.id = "y";
    let fuel3 = document.createElement("div");
    fuel3.id = "fuel_id";
    let line3 = document.createElement("p");
    let fimg3 = document.createElement("img");
    fimg3.id = "f_img";
    fimg3.src =
      "https://zoomcar-assets.zoomcar.com/images/original/afb10552c79c652619a45d814ab9f936f8592037.png?1584454817";
    line3.innerText = "Cancellation Policy";
    m.innerText = "Hassle free cancellations and refunds at nominal charges";
    n.innerHTML = "See Details";
    n.href =
      "../../../policy and help page/Privacy Policy/Help & Support/index.html";
    f_div2.append(line3, m, n);
    fuel3.append(fimg3, f_div2);

    let f_div3 = document.createElement("div");
    let i = document.createElement("p");
    i.id = "x";
    let j = document.createElement("a");
    j.id = "y";
    let fuel4 = document.createElement("div");
    fuel4.id = "fuel_id";
    let line4 = document.createElement("p");
    let fimg4 = document.createElement("img");
    fimg4.id = "f_img";
    fimg4.src =
      "https://zoomcar-assets.zoomcar.com/images/original/afb10552c79c652619a45d814ab9f936f8592037.png?1584454817";
    line4.innerText = "Agreement Policy";
    i.innerText =
      "I hereby agree to the terms and conditions of the Lease Agreement with Host";
    j.innerHTML = "See Details";
    j.href =
      "../../../policy and help page/Privacy Policy/Host-Policy/index.html";

    let inpu = document.createElement("input");
    inpu.type = "checkbox";
    inpu.id = "inpu";

    f_div3.append(line4, i, j);
    fuel4.append(fimg4, f_div3, inpu);

    maindiv.append(
      deldiv,
      add,
      adddiv,
      dam,
      damDiv1,
      peace1,
      Q_A_div,
      mind,
      fuel1,
      fuel2,
      fuel3,
      fuel4
    );
    append.append(mainDiv, maindiv);
    let totle = document.getElementById("totle_Price");
    // console.log("totle:", totle);
    totle.innerHTML = el.price;
  });
  // ..............................functionalities..................................../


 
 

  document.getElementById("chinna").addEventListener("click", chaitu);

  let total=document.getElementById('totle_Price')
  let book=document.getElementById("chinna")
  function chaitu(){
    if (document.getElementById("chinna").checked == true) {
      console.log(((+total.innerText)+(+book.value)))
      total.innerText=((+total.innerText)+(+book.value))
    }
    else{
      total.innerText=((+total.innerText)-(+book.value))
    }
  }


  document.getElementById("input1").addEventListener("click", chaitu1);



  let book1=document.getElementById("input1")
  function chaitu1(){
    if (book1.checked == true) {
      console.log(((+total.innerText)+255))
      total.innerText=((+total.innerText)+255)
    }
    else{
      total.innerText=((+total.innerText)-255)
    }
  }
  document.getElementById("inp").addEventListener("click", chaitu2);
  let book2=document.getElementById("inp")
  function chaitu2(){
    if (book2.checked == true) {
      console.log(((+total.innerText)+414))
      total.innerText=((+total.innerText)+414)
    }
    else{
      total.innerText=((+total.innerText)-414)
    }
  }

  localStorage.setItem("price",total.innerText)

  let btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    location.href = "../../../aakash/payment/index.html";
  });