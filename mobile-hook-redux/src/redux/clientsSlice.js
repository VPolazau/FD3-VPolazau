import { createSlice } from '@reduxjs/toolkit'

import data from '../data/data.json'

const initialState = {
  dataClients: data.clients,
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {

    saveClient: (state, action) => {
      const { id, newLastname, newBalance } = action.payload
      const { dataClients } = state
      const idx = dataClients.findIndex(el => el.id === id)
      let newDataClients = dataClients.slice()
      newDataClients = [
        ...dataClients.slice(0, idx),
        { ...dataClients[idx], lastname: newLastname, balance: +newBalance },
        ...dataClients.slice(idx + 1, dataClients.length),
      ]
      return { dataClients: newDataClients }
    },

    deleteClient: (state, action) => {
      const { dataClients } = state
      const idx = dataClients.findIndex(el => el.id === action.payload)
      let newDataClients = dataClients.slice()
      newDataClients.splice(idx, 1)
      return {dataClients: newDataClients}
    },

    saveNewClient: (state, action) => {
      const {lastname, name, patronymic, balance, newItemID} = action.payload
      const { dataClients } = state
      const newClient = {
        id: newItemID,
        lastname,
        name,
        patronymic,
        balance,
      }
      return {dataClients:[...dataClients, newClient]}
    }
  },
})

export const { saveClient, deleteClient, saveNewClient } = clientsSlice.actions

export default clientsSlice.reducer
