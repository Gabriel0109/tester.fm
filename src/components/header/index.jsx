import { IntroWrapper } from './styles.js';
import { SignInButton } from '../signInButton/index.jsx';
import {useSession} from '../../hooks/useSession'
export function Header() {
    const { user,  token} = useSession()
    return (
 
        <>
            <IntroWrapper>
               <h1>Tester.fm</h1>
               <SignInButton />
            </IntroWrapper>
        </>
    );
            }
