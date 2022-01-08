import  React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Block, Row } from './Login.style';

import Logo from '../../assets/image/Logo.png'
import { TextInput } from '../../stylesheets/TextInput.style';
import { LogoImage } from '../../stylesheets/Logo.styles';
import { Button } from '../../stylesheets/Button.style';
import { SubTitle } from '../../stylesheets/Typography';
import { Link } from 'react-router-dom';
import { Checkbox } from '../../stylesheets/CheckBox.style';


export class LoginPage extends PureComponent {
    // static propTypes = {

    // }

    render() {
        return (
            <Block>
                <LogoImage src={Logo} size="small" />
                <SubTitle style={{marginBottom: 24}}>Securely login to your account</SubTitle>
                <TextInput placeholder='Email' />
                <TextInput style={{marginBottom: 30}} placeholder='Password' type="password" />
                <Row style={{marginBottom: 14}}>
                <Checkbox label="Remember me" />
                <Link to="/"><SubTitle >I forgot my password</SubTitle></Link>
                </Row>
                <Button primary>LOG IN</Button>
                <SubTitle primary style={{ marginTop: 15, marginBottom: 40 }}>Don't have an account? <Link to="/"> Sign up </Link></SubTitle>
            </Block>
        )
    }
}

export default LoginPage
