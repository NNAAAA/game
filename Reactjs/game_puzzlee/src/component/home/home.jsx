import './home.css'

import { useContext } from 'react'
import { Data } from '../store/store'

import Start from '../start/start'
import RootPic from '../rootPic/rootPic'

export default function Home(){
	console.log('home')
  const { 
		image,
		activePic,setActivePic,
 	}=useContext(Data)

	 
	function play(e){
		if (activePic) {
			document.getElementById('background').style.left='-100%'
		}		
	}

	function animation(a){
		const picture=document.querySelectorAll(".active")
		picture.forEach(pic=>{
			pic.classList.remove('active')
		})
		a.target.classList.add('active')
	}


	function chose(img,a){
		setActivePic(img)
		animation(a)
	}
	
	// function outWin(){
	// 	document.getElementById('win').style.bottom='100%'
	// }

  	return (
			<div id='background'>
				<div id='home' >
					<h1>Puzzle Game</h1>
					<h3>Chọn hình</h3>
					<div id='home__picture'>
						{image.map((img,index)=>         
							<div 
								style={{
									width:'100px',
									height:'100px',
									backgroundImage:`url(${img.url})`,
									backgroundSize:'cover',
									backgroundPosition:'center center',
									marginBottom:'1rem'
								}}
								onClick={(e)=>chose(img.url,e)}
								key={index}
								className='picture'
							>
							</div>
						
						)}
					</div> 
					<button id='home__play' onClick={(e)=>play(e)} href='/start'>Chơi</button> 		
				</div>

				<div id='win'>
					Win
				</div>

				<Start/>
				<RootPic/>
			</div>
  	)
}