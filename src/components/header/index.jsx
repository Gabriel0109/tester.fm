import { IntroWrapper } from './styles.js';
import { SignInButton } from '../singinbutton/index.jsx';


export default function Header() {
    return (
        <>
            <IntroWrapper>
               <h1>Tester.fm</h1>
               <SignInButton />
            </IntroWrapper>
        </>
    );
            }
