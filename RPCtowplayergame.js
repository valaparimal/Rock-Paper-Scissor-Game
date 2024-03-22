let usernm='';
let user;
let compnm='comp';
let turns=1;
let cmphover;
let number;
let userScore=0,userop="Roak";
let compScore=0,compop="Roak";
let arr=['Roak','Paper','Scissor'];
let userScoremsg=document.querySelector("#userscore");
let compScoremsg=document.querySelector("#compscore");
let msg=document.querySelector("#msg");
let msgbg=document.querySelector("#msgbg");
let msgcomp=document.querySelector("#msgcomp");
let msgbgcomp=document.querySelector("#msgbgcomp");
let p=0,q=0;


let btn2=document.querySelector("#playbtn2");


btn2.addEventListener("click",()=>{
    promptmsg();
    player_1.style.visibility="unset";
    player_2.style.visibility="unset";
    document.querySelector(".stop1").style.visibility="unset";
    document.querySelector("#score-board").style.gap="6.5rem";
    msgbg.style.visibility="unset";
    msgbgcomp.style.visibility="unset";
    document.querySelector("#user").style.visibility="unset";
    document.querySelector("#comp").style.visibility="unset";
    document.querySelector("#vs").style.visibility="unset";
    document.querySelector(".note").style.visibility="hidden";
    main();
});

const promptmsg=( )=>{
    while(usernm==='')
    {
        usernm=prompt("Enter Player 1 Name to play :");
        if(usernm===null)
        {
            location.reload();
        }
    }
    console.log(usernm);
    let usrnm=document.querySelectorAll(".username");
    usrnm.forEach((username)=>{
        username.innerText=usernm;
    });
     while(compnm==='comp')
        {
            compnm=prompt("Enter Player 2 Name to play :");
            if(compnm===null)
            {
                location.reload();
            }
        }
        console.log(compnm);
        let cmpnm=document.querySelectorAll(".compname");
        cmpnm.forEach((compname)=>{
            compname.innerText=compnm;
        });
        compop="Roakc";
        document.querySelector("#userchoices").style.backgroundColor="Yellow";
        document.querySelectorAll(".compchoice").forEach((compchoice)=>{
            compchoice.classList.add("comphover");
        });

    btn2.remove();
}

const userImage=(user)=>{
    const image1=document.createElement("div");
    if(user==="Roak")
    {
        image1.innerHTML="<img id='userimg' src='roak.png'/>";
    }
    else if(user==="Paper")
    {
        image1.innerHTML="<img id='userimg' src='paper.png'/>";
    }
    else
    {
        image1.innerHTML="<img id='userimg' src='scissior.png'/>";
    }
        image1.style.height="250px";
        image1.style.width="250px";
        image1.style.position="absolute";
        image1.style.top="14rem";
        image1.style.left="25%";
        image1.setAttribute("class","choices");

        document.querySelector("#vs").before(image1);
};

const compImage=(comp)=>{
    const image2=document.createElement("div");
    if(comp==="Roak")
    {
        image2.innerHTML="<img id='compimg' src='roak.png'/>";
    }
    else if(comp==="Paper")
    {
        image2.innerHTML="<img id='compimg' src='paper.png'/>";
    }
    else
    {
        image2.innerHTML="<img id='compimg' src='scissior.png'/>";
    }
        image2.style.height="250px";
        image2.style.width="250px";
        image2.style.position="absolute";
        image2.style.top="14rem";
        image2.style.right="25%";
        image2.setAttribute("class","choices");

        document.querySelector("#vs").before(image2);
};


const genchoice= ()=>{
    const arr=["Roak","Paper","Scissor"];
    return arr[Math.floor(Math.random()*3)];
}


const finalResult=(rt)=>{
    if(rt==="win")
    {
        userScore++;
        userScoremsg.innerText=userScore;
        msg.innerText=`${usernm} win ${userScore} time`;
        msgbg.style.backgroundColor="green";
        msgcomp.innerText=`${compnm} lose ${userScore} time`;
        msgbgcomp.style.backgroundColor="red";
    }
    else
    {
        compScore++;
        compScoremsg.innerText=compScore;
        msg.innerText=`${usernm} lose ${compScore} time`;
        msgbg.style.backgroundColor="red";
        msgcomp.innerText=`${compnm} win ${compScore} time`;
        msgbgcomp.style.backgroundColor="green";
    }

    if(userScore===3 || compScore===3)
    {
        let vdo;
        document.querySelector("#vs").setAttribute("class","choices");

        if(userScore===3)
        {
            vdo=1;
            msg.innerText=`${usernm} win!`;
           // msgbg.style.left="44%";
            msg.style.fontSize="35px";
            msgbg.style.backgroundColor="green";
            msgcomp.innerText=`${compnm} lose!`;
           // msgbgcomp.style.left="44%";
            msgcomp.style.fontSize="35px";
            msgbgcomp.style.backgroundColor="red";
            //document.querySelector("body").style.backgroundColor="green";
            document.querySelector(".win").innerText=`${usernm} win!`;
        }
        else
        {
            msg.innerText=`${usernm} lose!`;
           // msgbg.style.left="44%";
            msg.style.fontSize="35px";
            msgbg.style.backgroundColor="red";
            msgcomp.innerText=`${compnm} win!`;
           // msgbg.style.left="44%";
            msgcomp.style.fontSize="35px";
            msgbgcomp.style.backgroundColor="green";
           // document.querySelector("body").style.backgroundColor="red";
           document.querySelector(".win").innerText=`${compnm} win!`;
        }

        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        document.querySelector(".star").style.visibility="unset";
        document.querySelector("#click1").style.visibility="hidden";
        document.querySelector("#click2").style.visibility="hidden";
        document.querySelector("#cur").remove();
        uservideo(1);

        // let choicesHidden=document.querySelectorAll(".choices");
        // choicesHidden.forEach((choices)=>{
        //     choices.style.visibility="hidden";
        // });
        playButton();        
        document.querySelector("#pa").addEventListener("click",()=>{
            main();
        });

        setTimeout(()=>document.querySelector(".win").style.fontSize="3rem",300);
        setTimeout(()=>document.querySelector(".win").style.fontSize="4rem",600);
        setTimeout(()=>document.querySelector(".win").style.fontSize="3rem",1200);
        setTimeout(()=>document.querySelector(".win").style.fontSize="4rem",1500);
        setTimeout(()=>document.querySelector(".win").style.fontSize="3rem",1800);
        setTimeout(()=>document.querySelector(".win").style.fontSize="4rem",2100);
        setTimeout(()=>document.querySelector(".win").style.fontSize="3rem",2400);
        setTimeout(()=>document.querySelector(".win").style.fontSize="4rem",2700);
        setTimeout(()=>document.querySelector(".win").style.fontSize="3rem",3000);
        setTimeout(()=>document.querySelector(".win").style.fontSize="4rem",3300);
    }
}

const result=(user,comp)=>{
    console.log(user);
    console.log(comp);
    let rt;
    if(user===comp)
    {
        msg.innerText="match Drow!!!"
        msgbg.style.backgroundColor="black";
        msgcomp.innerText="match Drow!!!"
        msgbgcomp.style.backgroundColor="black";
    }
    else
    {
        if(user==="Roak")
        {
            rt=comp==="Scissor"?"win":"lose";
        }
        else if(user==="Paper")
        {
            rt=comp==="Roak"?"win":"lose";
        }
        else
        {
            rt=comp==="Paper"?"win":"lose";
        }
            finalResult(rt);
    }
}

const video=document.createElement("div");
const uservideo=(vdo)=>{
    if(vdo===1)
    {
        video.innerHTML="<video class='v1' src='shubh din ayo re.mp4' autoplay loop style='height:100%'></video>";
        video.style.height="0px";
        video.style.position="absolute";
        video.style.top="5rem";
        video.style.left="27.5rem";
    }
    else
    {
        video.innerHTML="<video class='v1' src='hathibhi paper bangaye.mp4' autoplay loop style='height:100%'></video>";
        video.style.height="0px";
        video.style.position="absolute";
        video.style.top="2.5rem";
        video.style.left="38rem";
    }
    document.querySelector("#vs").before(video);        
};


 const playButton=()=>{
    let plbtn=document.querySelector("#plbtn");
    plbtn.innerHTML="<button id='pa'>Play Again</button>";
    plbtn.style.position="absolute";
    plbtn.style.top="38rem";
    plbtn.style.left="45%";
    document.querySelector("#pa").style.fontSize="30px";
    document.querySelector("#pa").style.borderRadius="5px";
    document.querySelector("#pa").style.padding="3px";
    document.querySelector("#pa").style.backgroundColor="aqua";
    document.querySelector("body").prepend(plbtn);
 }


 const main=()=>{
    userScore=0;
    compScore=0;

   
    if(p!==0)
    {
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        document.querySelector(".star").style.visibility="hidden";
        document.querySelector("#click1").style.visibility="unset";
        document.querySelector("#click2").style.visibility="unset";
        document.querySelector("#pa").remove();
        video.remove();

        let choicesHidden=document.querySelectorAll(".choices");
            choicesHidden.forEach((choices)=>{
            choices.style.visibility="unset";
        });

        msg.innerText="Play Game";
        msgbg.style.backgroundColor="black";
        msgcomp.innerText="Play Game";
        msgbgcomp.style.backgroundColor="black";
        document.querySelector("#score-board").style.color="black";
        msg.style.color="white";
        msg.style.fontSize="20px";
        msgcomp.style.color="white";
        msgcomp.style.fontSize="20px";
        userScoremsg.innerText=userScore;
        compScoremsg.innerText=userScore;
        
        document.querySelector("#vs").style.left="46.5%";

    }
    p++;

    document.querySelector("#vd").innerHTML="<audio id='cur' src='Happy_Kids_Cartoon_Music_Background_Y2bs.Com.m4a' height='100px' autoplay></audio>"; 

    
 }   

    
        let refresh=document.querySelector("#refresh");
        refresh.addEventListener("click",()=>{
            location.replace(url="index.html");
        });

       


    let player_1=document.createElement("div");
    player_1.innerHTML="<button id='click1'>Click</button>";
    player_1.style.position="absolute";
    player_1.style.left="13rem";
    player_1.style.top="14rem";
    document.querySelector("body").append(player_1);
    document.querySelector("#click1").style.fontSize="1.5rem";
    document.querySelector("#click1").style.borderRadius="50%";
    document.querySelector("#click1").style.height="4rem";
    document.querySelector("#click1").style.width="4rem";   
    document.querySelector("#click1").style.backgroundColor="yellow";
    player_1.style.visibility="hidden";

    let player_2=document.createElement("div");
    player_2.innerHTML="<button id='click2'>Click</button>";
    player_2.style.position="absolute";
    player_2.style.right="15.6rem";
    player_2.style.top="14.4rem";
    document.querySelector("body").append(player_2);
    document.querySelector("#click2").style.fontSize="1.5rem";
    document.querySelector("#click2").style.borderRadius="50%";
    document.querySelector("#click2").style.height="4rem";
    document.querySelector("#click2").style.width="4rem";   
    document.querySelector("#click2").style.backgroundColor="lightyellow";
    player_2.style.visibility="hidden";


   // player 1

    let v=0,t=0;
    let userchoices_1= document.querySelector("#userchoices");
    const click1 = document.querySelector("#click1");
    click1.addEventListener("click",()=>{
        if(v===0)
        {
            if(t!==0)
            {
                document.querySelector("#userimg").remove();
                document.querySelector("#compimg").remove();
            }
            t++;
            number%=3;
            let value=spinner();
            userchoices_1.style.transition="1s";
            if(value===0)
            {
                userchoices_1.style.transform=`rotate(${3600}deg)`;
            }
            else if(value===1)
            {
                userchoices_1.style.transform=`rotate(${3600*number+280}deg)`;
            }
            else
            {
                userchoices_1.style.transform=`rotate(${3600*number+100}deg)`;
            }
            v=1;
            user=number%3;
            setTimeout(()=>userImage(arr[user]),1000);
            setTimeout(()=>document.querySelector(".stop1").style.visibility="hidden",1500);
            setTimeout(()=>document.querySelector(".stop2").style.visibility="unset",1500);
            setTimeout(()=>document.querySelector("#click1").style.backgroundColor="lightyellow",1500);
            setTimeout(()=>document.querySelector("#click2").style.backgroundColor="yellow",1500);
        }
    
    });

    // player 2

    const click2 = document.querySelector("#click2");
    click2.addEventListener("click",()=>{
        if(v===1)
        {
            number%=3;
            let value=spinner();
            document.querySelector("#compchoices").style.transition="1s";
            if(value===0)
            {
                document.querySelector("#compchoices").style.transform=`rotate(${3600}deg)`;
            }
            else if(value===1)
            {
                document.querySelector("#compchoices").style.transform=`rotate(${3600*number+260}deg)`;
            }
            else
            {
                document.querySelector("#compchoices").style.transform=`rotate(${3600*number+100}deg)`;
            }
            setTimeout(()=>compImage(arr[number%3]),1000);
            v=0;
            setTimeout(()=>document.querySelector(".stop2").style.visibility="hidden",1500);
            setTimeout(()=>document.querySelector(".stop1").style.visibility="unset",1500);
            setTimeout(()=>document.querySelector("#click2").style.backgroundColor="lightyellow",1500);
            setTimeout(()=>document.querySelector("#click1").style.backgroundColor="yellow",1500);
            setTimeout(()=>result(arr[user],arr[number%3]),1500);
        }
    });
number=0;
    const spinner=()=>{
        number+=Math.floor(Math.random()*100000);
        return number%3;
    }

