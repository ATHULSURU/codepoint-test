import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { bindActionCreators } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator } from '../../Store/Action/index'

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
})

function UserTable(props) {
  const users = useSelector((state) => state.logInData.data)
  const dispatch = useDispatch()
  const { itemsFetchData } = bindActionCreators(actionCreator, dispatch)
  const classes = useStyles()

  useEffect(() => {
    itemsFetchData()
  }, [])

  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>ID</TableCell>
              <TableCell align='right'>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='left'>{row.id}</TableCell>
                <TableCell align='right'>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UserTable
