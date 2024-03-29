import React, { useState } from 'react'

import { addRams } from '../apiClient'

// ADD SLICE...

function Form(props) {
  const [form, setForm] = useState({
    plate: '',
    latitude: '',
    longitude: '',
    month: '',
    goods: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const setMonth = props.setMonth

  async function handleSubmit(event) {
    event.preventDefault()
    const month = form.month
    addRams(form)
      .then(() => {
        setMonth('')
        setMonth(month)
        setForm({
          plate: '',
          latitude: '',
          longitude: '',
          month: '',
          goods: '',
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="content-container">
      <div className="ramform">
        <h1>Ram Radar Submissions</h1>
        <form>
          <div>
            <label htmlFor="goods">Loot</label>
            <input
              type="text"
              name="goods"
              placeholder="Enter Goods stolen.."
              onChange={handleChange}
              value={form.goods}
            />
          </div>

          <div>
            <label htmlFor="plate">Number Plate</label>
            <input
              type="text"
              name="plate"
              placeholder="Enter Number plate.."
              onChange={handleChange}
              value={form.plate}
            />
          </div>

          <div>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              name="latitude"
              placeholder="Enter Latitude.."
              onChange={handleChange}
              value={form.latitude}
            />
          </div>

          <div>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              name="longitude"
              placeholder="Enter Longitude.."
              onChange={handleChange}
              value={form.longitude}
            />
          </div>

          <div>
            <label htmlFor="month">Month</label>
            <input
              type="test"
              name="month"
              placeholder="Enter Month.."
              onChange={handleChange}
              value={form.month}
            />
          </div>

          <div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
