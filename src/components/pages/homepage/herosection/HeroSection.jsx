import HeroTextButtons from "../herosection/HeroTextButtons"
import styled from './style/HeroSection.module.css'

function HeroSection() {
  return (
    <div className={styled.herosection}>
        <div className={styled.herosectionframe}>
            <HeroTextButtons />
        </div>
    </div>
  )
}

export default HeroSection