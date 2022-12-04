// import React, {useMemo} from 'react';
// import { useTable } from 'react-table'
// import styled from 'styled-components';
// import BootstrapTable from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Table({ colum, items }) {
//     const columns = useMemo(() => colum, [])
//     const data = useMemo(() => items, [])

//      const tableInstance = useTable({ columns, data })
//     const {
//    getTableProps,
//    getTableBodyProps,
//    headerGroups,
//    rows,
//    prepareRow,
//     } = tableInstance 
    
//     return (
//    <GeneralCon {...getTableProps()}>
//      <TransactionHead>
//        {
//        headerGroups.map(headerGroup => (
//          <tr {...headerGroup.getHeaderGroupProps()}>
//            {
//            headerGroup.headers.map(column => (
//              <Transactionth {...column.getHeaderProps()}>
//                {
//                column.render('Header')}
//              </Transactionth>
//            ))}
//          </tr>
//        ))}
//      </TransactionHead>
//      <tbody {...getTableBodyProps()}>
//        {
//        rows.map(row => {
//          prepareRow(row)
//          return (
//            <Transactiontr {...row.getRowProps()}>
//              {
//              row.cells.map(cell => {
//                return (
//                  <Transactiontd {...cell.getCellProps()}>
//                    {
//                    cell.render('Cell')}
//                  </Transactiontd>
//                )
//              })}
//            </Transactiontr>
//          )
//        })}
//      </tbody>
//    </GeneralCon>
//  )
// }

//  export default Table

// const GeneralCon = styled(BootstrapTable)`
//   font-family: 'Circe';
//   border-collapse: collapse;
//   width:704px; 
//   height:312px; 
//   margin-top: 20px ;
//   margin-left:32px;
//   margin-right: 32px;
// background-color: transparent;
 
//   @media (min-width: 1200px) {
//     width: 715px;
//     margin: 46px 16px  0px 69px;
//   }`

//   const TransactionHead = styled.thead`
//     height: 58px;
//     background-color: #ffff; 
//     padding: 16px 20px 15px 20px;
//    border-radius: 30px;
// `;
// const Transactionth = styled.th`
// font-style: normal;
// font-weight: 700;
// font-size: 18px;
// line-height: 27px;
// color: #000000;
// border: 1px solid black;
// `;
// const Transactiontr = styled.tr`
// width:656px;
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 24px;
// color: #000000; 
// padding-top:8px;
// padding-bottom:8px;
// :first-child{
//   margin-top:16px;
//   padding-top:0px;
// }
// :not(:last-child){
//  border-bottom:  1px solid black;
// }`;

// const Transactiontd = styled.td`
// text-align:start;
// border:  1px solid black;
//    white-space: nowrap;
//     overflow: hidden;
//     text-overflow:  ellipsis;
// :nth-last-child(-n + 2){
//  text-align: end;
// }
// :nth-child(-n + 2) {
//   text-align:center;
// }`