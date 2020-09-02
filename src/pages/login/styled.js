import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

export const CForm = styled(Form)
`  
border:solid 1px;
padding: 0 2% 0% 2%;
width:25%;
align-self: center;
position: relative;
margin: 0 auto;
margin-top: 3%;
height: 400px;
text-align: left;
`

export const CButton = styled.button `  
color:	#000000;
text-align: center;
align-content: center;
background-color:#f1c760;
width:100%;
margin:0;
border: solid 0.5px;
border-radius:5px;
`
export const CImg = styled.img `  
margin: 0 auto;
align-self: center;
justify-content:center;
position: relative;
text-align: center;
margin-top: 5%;
`

export const CDiv = styled.div `  
align-itens: center;
justify-content:center;
text-align: center;
`

export const CFormText = styled(Form.Text)
`  
font-size: x-large;
font-weight: 500;
padding: 5%  5%  10% 0;
`