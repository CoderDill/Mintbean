
export default function SVGElement({html}){

    console.log(html)
    const createElement = (string)=>{
    
        const svgEl = document.createElement('svg')
        svgEl.innerHTML = string
        console.log(svgEl)
        document.querySelector('.MyPicturesContainer').appendChild(svgEl)
         
      } 
    return(
        <div>
            
        </div>
    )

}