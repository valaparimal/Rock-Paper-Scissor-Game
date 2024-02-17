let usernm='';
let userScore=0,userop="Roak";
let compScore=0,compop="Roak";
let userScoremsg=document.querySelector("#userscore");
let compScoremsg=document.querySelector("#compscore");
let msg=document.querySelector("#msg");
let msgbg=document.querySelector("#msgbg");
let p=0,q=0;

let btn=document.querySelector("#playbtn");
btn.addEventListener("click",()=>{
    while(usernm==='')
    {
        usernm=prompt("Enter your Name to play :");
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
    btn.remove();
    q++;
    main();
});


const userImage=(user)=>{
    const image1=document.createElement("div");
    if(user==="Roak")
    {
        image1.innerHTML="<img src='roak.png'/>";
    }
    else if(user==="Paper")
    {
        image1.innerHTML="<img src='paper.png'/>";
    }
    else
    {
        image1.innerHTML="<img src='scissior.png'/>";
    }
        image1.style.height="100px";
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
        image2.innerHTML="<img src='roak.png'/>";
    }
    else if(comp==="Paper")
    {
        image2.innerHTML="<img src='paper.png'/>";
    }
    else
    {
        image2.innerHTML="<img src='scissior.png'/>";
    }
        image2.style.height="100px";
        image2.style.position="absolute";
        image2.style.top="14rem";
        image2.style.right="25%";
        image2.setAttribute("class","choices");

        document.querySelector("#vs").before(image2);
};

let f1=1;
const userOpacity=(user) =>{
    userop=user;
    if(f1===0)
    {
        document.querySelector(`#${userop}`).style.opacity="30%";
        f1=1;
    }
    else
    {
        document.querySelector(`#${userop}`).style.opacity="100%";
        f1=0;
    }
}
let f2=1;
const compOpacity=(comp) =>{
    compop=comp;
    if(f2===0)
    {
        document.querySelector(`#${compop}c`).style.opacity="30%";
        f2=1;
    }
    else
    {
        document.querySelector(`#${compop}c`).style.opacity="100%";
        f2=0;
    }
}


const genchoice= ()=>{
    const arr=["Roak","Paper","Scissor"];
    return arr[Math.floor(Math.random()*3)];
}
const result=(user,comp)=>{
    let rt;
    if(user===comp)
    {
        msg.innerText="match Drow!!!"
        msgbg.style.backgroundColor="black";
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

            if(rt==="win")
            {
                userScore++;
                userScoremsg.innerText=userScore;
                msg.innerText=`${usernm} win ${userScore} time`;
                msgbg.style.backgroundColor="green";
            }
            else
            {
                compScore++;
                compScoremsg.innerText=compScore;
                msg.innerText=`${usernm} lose ${compScore} time`;
                msgbg.style.backgroundColor="red";
            }

        if(userScore===10 || compScore===10)
        {
            let vdo;
            document.querySelector("#vs").setAttribute("class","choices");

            if(userScore===10)
            {
                vdo=1;
                msg.innerText=`${usernm} win!`;
                msg.style.fontSize="35px";
                msgbg.style.backgroundColor="white";
                document.querySelector("body").style.backgroundColor="green";
            }
            else
            {
                msg.innerText=`${usernm} lose!`;
                msg.style.fontSize="35px";
                msgbg.style.backgroundColor="white";
                document.querySelector("body").style.backgroundColor="red";
            }
            document.querySelector("#score-board").style.color="white";
            msg.style.color="black";

            document.querySelector("#cur").remove();
            uservideo(vdo);

            let choicesHidden=document.querySelectorAll(".choices");
            choicesHidden.forEach((choices)=>{
                choices.style.visibility="hidden";
            });
            playButton();
            
            document.querySelector("#pa").addEventListener("click",()=>{
                main();
            });

        }
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
    plbtn.style.left="46.5%";
    document.querySelector("#pa").style.fontSize="30px";
    document.querySelector("#pa").style.borderRadius="5px";
    document.querySelector("#pa").style.padding="3px";
    document.querySelector("body").prepend(plbtn);
 }


 const main=()=>{
    userScore=0;
    compScore=0;
   
    if(p!==0)
    {
        document.querySelector("#pa").remove();
        video.remove();

        let choicesHidden=document.querySelectorAll(".choices");
            choicesHidden.forEach((choices)=>{
            choices.style.visibility="unset";
        });

        msg.innerText="Play Game By ckicking image";
        msgbg.style.backgroundColor="black";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("#score-board").style.color="black";
        msg.style.color="white";
        msg.style.fontSize="20px";
        userScoremsg.innerText=userScore;
        compScoremsg.innerText=userScore;
        
        document.querySelector("#vs").style.left="46.5%";

    }
    p++;

    document.querySelector("#vd").innerHTML="<video id='cur' src='exam__drama_performance_shree_belampar_primary_school__sarsvati_vandana_2018__Y2bs.Com.mp4' height='0px' autoplay></video>"; 

    
 }   

 
 let userchoices=document.querySelectorAll(".choice");
 userchoices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
         if(q!==0)
         {
            userOpacity(userop);
            compOpacity(compop);
            const user =choice.getAttribute("id");
            userImage(user);
            const comp=genchoice();
            compImage(comp);
            userOpacity(user);
            compOpacity(comp);
            result(user,comp);
         }
     });
 });
    
        let refresh=document.querySelector("#refresh");
        refresh.addEventListener("click",()=>{
            location.replace(url="index.html");
        });
