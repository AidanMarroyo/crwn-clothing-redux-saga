import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 120px;
  z-index: 5;
  box-sizing: content-box;
`
export const DropdownLink = styled(Link)`
  height: 30px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
export const DropdownSpan = styled.span`
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  cursor: pointer;
`
