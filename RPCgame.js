let usernm='';
let compnm='comp';
let comphover;
let userScore=0,userop="Rock";
let compScore=0,compop="Rock";
let userScoremsg=document.querySelector("#userscore");
let compScoremsg=document.querySelector("#compscore");
let msg=document.querySelector("#msg");
let msgbg=document.querySelector("#msgbg");
let p=0,q=0;

let btn=document.querySelector("#playbtn");
let btn2=document.querySelector("#playbtn2");

btn.addEventListener("click",()=>{
    permission();
});

btn2.addEventListener("click",()=>{
    window.location.href="RPCtwoplayergame.html";
});



const promptmsg=()=>{
    console.log(usernm);
    let usrnm=document.querySelectorAll(".username");
    usrnm.forEach((username)=>{
        username.innerText=usernm;
    });
    document.querySelector("#ask").remove();
    document.querySelector("main").style.visibility="unset";
    document.querySelector("body").style.backgroundColor="white";
    allow();
}

function permission(){
    let permissionmsg=document.createElement("div");
    permissionmsg.setAttribute("id","ask");
    document.querySelector("main").style.visibility="hidden";
    document.querySelector("body").style.backgroundColor="unset";
    permissionmsg.innerHTML="<p style='font-size:30px; background-color:rgb(14, 245, 245);'>Are you want to paly with your name?</p><button id='yes'>Yes</button><button id='no'>No</button>";
    document.querySelector("header").after(permissionmsg);
    btn.remove();
    btn2.remove();
    document.querySelector("footer").style.visibility="hidden";

    document.querySelector("#yes").addEventListener("click",()=>{
        while(usernm==="")
        {
            usernm=prompt("Enter your name");
            if(usernm===null)
            {
                document.querySelector("footer").style.visibility="unset";
                window.location.reload();
            }
        }
        if(usernm===" ")
        {
            usernm="You";
        }
        promptmsg();
    });

    document.querySelector("#no").addEventListener("click",()=>{
        usernm="You";
        promptmsg();
    });
}

function allow(){
    msgbg.style.visibility="unset";
    document.querySelector("#score-board").style.visibility="unset";
    document.querySelector("#vs").style.visibility="unset";
    document.querySelector(".note").style.visibility="hidden";
    q++;
    document.querySelector("footer").remove();
    main();
}
const userImage=(user)=>{
    const image1=document.createElement("div");
    if(user==="Rock")
    {
        image1.innerHTML="<img src='rock.png'/>";
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
    if(comp==="Rock")
    {
        image2.innerHTML="<img src='rock.png'/>";
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
    const arr=["Rock","Paper","Scissor"];
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
        if(user==="Rock")
        {
            rt=comp==="Scissor"?"win":"lose";
        }
        else if(user==="Paper")
        {
            rt=comp==="Rock"?"win":"lose";
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
                msgbg.style.backgroundColor="green";
            }
            else
            {
                msg.innerText=`${usernm} lose!`;
                msg.style.fontSize="35px";
                msgbg.style.backgroundColor="red";
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
    plbtn.style.left="45%";
    document.querySelector("#pa").style.fontSize="30px";
    document.querySelector("#pa").style.borderRadius="5px";
    document.querySelector("#pa").style.padding="3px";
    document.querySelector("#pa").style.backgroundColor="yellow";
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

    document.querySelector("#vd").innerHTML="<audio id='cur' src='Happy_Kids_Cartoon_Music_Background_Y2bs.Com.m4a' height='100px' autoplay></audio>"; 

    
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
            let comp=genchoice();
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

       
