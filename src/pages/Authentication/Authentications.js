import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LoginPage from '../../components/Login/Login'
import { Page } from './Authentications.style'

export default class Authentications extends PureComponent {
    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        return (
            <Page>
                <LoginPage />
            </Page>
        )
    }
}
