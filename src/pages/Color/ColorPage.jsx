
import Color from './Color'

function ColorPage() {

  return(
    <div className='color-psyc-container'>
      <Color color='Red' psyc='Danger'></Color>
      <hr />
      <Color color='Green' psyc='Nature'></Color>
      <hr />
      <Color color='White' psyc='Purity'></Color>
      <hr />
      <Color color='Blue' psyc='Self-confidence'></Color>
    </div>
  )
}

export default ColorPage;