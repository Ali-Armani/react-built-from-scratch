
import ConditionalRendering from "./ConditionalRendering.jsx";

function ConditionalRenderingPage() {

  return(
    <div>
    <ConditionalRendering isLoggedIn = {true} username = 'Romeo' />
    <ConditionalRendering isLoggedIn = {0} username = 'Mike' />
    <ConditionalRendering isLoggedIn = {1} username = 'Robert' />
    <ConditionalRendering isLoggedIn = {true} username = 'Alice' />
    <ConditionalRendering isLoggedIn = {false} username = 'Eddie' />
    <ConditionalRendering isLoggedIn = {2} username = 'Josh' />
    <ConditionalRendering isLoggedIn = {0.25} username = 'John' />
    <ConditionalRendering isLoggedIn = {NaN} username = '' />
    <ConditionalRendering isLoggedIn = {undefined} username = 'Elena' />
    <ConditionalRendering isLoggedIn = {null} username = 'Juliet' />
    </div>
  );
}

export default ConditionalRenderingPage;