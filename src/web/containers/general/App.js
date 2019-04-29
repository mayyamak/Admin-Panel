import React, { Component } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import {
  loadCurrentUser, clearMessage, clearUser,
  changeLanguage,
  // togglePage
} from '../../../actions'
import Message from '../../components/general/Message'
import Loading from '../../components/general/Loading'
import SideBar from '../../components/general/App/SideBar'
import Footer from '../../components/general/App/Footer'
import GeneralSearch from '../../components/general/App/GeneralSearch'
import AppHeaderUserProfile from '../../components/general/App/HeaderUserProfile'
import { percentColor, changeBaseColor, } from '../../../utils/color'
import { buildMessage, } from '../../../utils/message'
import { listConstants, } from '../../../utils/list'
import { siteConfig } from '../../../utils/siteConfig'
import { baseRoute } from '../../../utils/route'
import { setCookie } from '../../../utils/cookie'
import { language, ln, dir } from '../../../utils/language'

import homePageIcon from '../../../../design/icons/Home.png'
import profileImage from '../../../../design/dist/img/profile-image.png'


class App extends Component {
  constructor(props) {
    super(props)
    this.noPlan = true
    this.state = {
      pageCollapsed: true
    }
  }
  toggleLanguage() {
    const newLang = localStorage.getItem('language') == 'fa' ? 'en' : 'fa'
    localStorage.setItem('language', newLang)
    location.reload()
  }
  componentWillMount() {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'fa')
    }
    this.preloadData()
  }
  componentDidMount() {
    this.loadData()
  }
  async preloadData() {
    // setCookie('clienToken', '', -1)
    localStorage.removeItem('client_csrf_token')

    document.getElementsByTagName('body')[0].classList.remove('sidebar-collapse')
  }
  async loadData() {
    await this.props.loadCurrentUser()
    changeBaseColor(siteConfig[siteConfig.key].baseColor)
    // this.checkAdmin()

  }
  togglepage = () => {
    let isPageCollapsed = document.getElementsByTagName('body')[0].classList.contains('sidebar-collapse');
    console.log('isPageCollapsed contains sidebar-collapse: ', isPageCollapsed);
    this.setState({ pageCollapsed: isPageCollapsed})
    // this.props.togglePage();
  }
  render() {
    console.log('App props : ', this.props)
    const { userData, userDataLoading,
      messageText, messageType,
      clearMessage,
      toggledPage,
    } = this.props
    const noInvoicePaid = !userData || !userData.lastPaidInvoice || userData.lastPaidInvoice.invoiceStatus != 'PAID'
    const sideBarProps = { userData, noInvoicePaid, toggledPage, pageCollapsed: this.state.pageCollapsed }
    const userProfileProps = { userData, userDataLoading }

    const showLanguage = language.key == 'fa' ? 'EN' : 'FA'
    const isfa = language.key == 'fa'

    const message = buildMessage(messageType, messageText)
    const handlers = { clearMessage, }
    const baseConfig = siteConfig[siteConfig.key]
    document.title = isfa ? ln('controlPanel') + ' ' + baseConfig.brand.fa
      : baseConfig.brand.en + ' ' + ln('controlPanel')
    const innerwrapperHeight = innerHeight
    const logoPgMargin = isfa ? '0px -20px 5px 7px' : '0px 7px 5px -20px'
    const styleType = baseRoute.isBusiness ? 'business' : 'master'

    return (
      <div className="wrapper" style={localStorage.getItem('language')=='en'? {fontFamily: 'arial',}: {}}>
        <Message message={message} handlers={handlers} />
        <header className="main-header">
          {/*<Link>hello</Link>*/}
          <Link to={`/${baseRoute.active}`} className="logo">
            <span className="logo-mini">
              <img src='/design/dist/img/tripema-pic.png' style={{height: 45}} />
            </span>
              <span className="logo-lg">
                <img src='/design/dist/img/tripema-logo.png' style={{height: 45}} />
              </span>
            }
          </Link>
          <nav className={`navbar navbar-static-top ${styleType}`}>


            <div className={`navbar-custom-menu ${language.key == 'en' ? 'pull-left' : 'pull-right'}`}>
              <ul className="nav navbar-nav">
                <li>
                  <a
                    style={{ color: 'black' }}
                    data-toggle="offcanvas" role="button"
                    onClick={() => { this.togglepage() }}
                  >
                    <i className="fa fa-bars" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
              <AppHeaderUserProfile {...userProfileProps} />
                <li>
                  <a data-toggle="control-sidebar" className="change-lang"
                    onClick={() => this.toggleLanguage()}>
                    {showLanguage}
                  </a>
                </li>

              </ul>
            </div>
          </nav>
        </header>
        <aside className={`main-sidebar ${styleType}`} style={{ paddingTop: 0 }}>


          <section className="sidebar">
            {userDataLoading == false ?
              userData ?
                <div className="user-panel" style={{ display: 'none' }} >
                  <div className="pull-left image">
                    <img src={userData && `https://www.gravatar.com/avatar/${userData.md5}?d=blank&s=0`} className="img-circle" alt="User Image" />
                  </div>
                  <div className="pull-left info">
                    <p>
                      {userData && (userData.name && userData.family ? userData.name + ' ' + userData.family :
                        <span className="en-font">{userData.username}</span>)
                      }
                    </p>
                    <small><i className="fa fa-circle text-green"></i> {ln('online')} </small>
                  </div>
                </div>
                :
                <i />
              :
              <i className="fa fa-spin fa-circle-notch text-white" style={{ margin: 20, color: 'white' }} />
            }
            {/*<GeneralSearch />*/}

            <SideBar {...sideBarProps} />


          </section>
        </aside>

        <div className="content-wrapper" style={{ minHeight: innerwrapperHeight }}>
          {this.props.children}
        </div>
        <div className="control-sidebar-bg"></div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const entities = state.masterEntities
  const { userData, userDataLoading,
    // messageText, messageType,

  } = state.generalEntities
  const { messageText, messageType,
    toggledPage
   } = entities
  const pathname = ownProps.location.pathname

  return {
    userData, userDataLoading,
    messageText, messageType,
    pathname,
    toggledPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch, ...bindActionCreators({
      loadCurrentUser, clearMessage, clearUser,
      changeLanguage,
      // togglePage,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
