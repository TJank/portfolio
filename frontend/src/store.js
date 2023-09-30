import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer, userLoginReducer, userDeleteReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer } from './reducers/userReducers'
import { contactRequestDetailsReducer, contactRequestListReducer, contactRequestUpdateReducer } from './reducers/contactRequestReducers'
import { clientCompaniesListReducer, clientCompanyCreateReducer, clientCompanyDeleteReducer, clientCompanyDetailReducer, clientCompanyListOptionsReducer, clientCompanyUpdateReducer } from './reducers/clientCompaniesReducer'
import { invoiceCreateReducer, invoiceDetailReducer, invoiceListReducer, invoiceUpdateReducer } from './reducers/invoiceReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailsReducer,
    userUpdate: userUpdateReducer,
    
    contactRequestList: contactRequestListReducer,
    contactRequestDetail: contactRequestDetailsReducer,
    contactRequestUpdate: contactRequestUpdateReducer,

    clientCompanyList: clientCompaniesListReducer,
    clientCompanyCreate: clientCompanyCreateReducer,
    clientCompanyDetail: clientCompanyDetailReducer,
    clientCompanyUpdate: clientCompanyUpdateReducer,
    clientCompanyDelete: clientCompanyDeleteReducer,

    clientCompanyListOptions: clientCompanyListOptionsReducer,

    invoiceList: invoiceListReducer,
    invoiceCreate: invoiceCreateReducer,
    invoiceDetail: invoiceDetailReducer,
    invoiceUpdate: invoiceUpdateReducer,
    
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

