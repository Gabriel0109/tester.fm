import { IntroWrapper } from './styles.js';
import { SignInButton } from '../signInButton/index.jsx';
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
