import { publishEvent } from '../eventbridge-events.js'

export const createAsset = async (req, res) => {
  console.log('Creating asset...')
  // const payload = req.body
  const payload = {
    id: 1,
    data: {
      type: 'ASSET'
    }
  }
  console.log('DEBUG_LOGGING: payload ', JSON.stringify(payload))

  const event_type = 'ASSET_CREATED'

  await publishEvent(event_type, payload) 

  return res.status(200).send('Asset created')
}