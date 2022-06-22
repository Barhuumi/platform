import { EventBridgeClient, PutEventsCommand } from '@aws-sdk/client-eventbridge'

export const publishEvent = async (event_type, event) => {
  const env_vars = {
    event_source: process.env.EVENT_SOURCE,
    platform_services_event_bus_arn: process.env.PLATFORM_SERVICES_EVENT_BUS_ARN,
    aws_region: process.env.AWS_REGION,
    HECTARE: process.env.HECTARE
  }
  console.log('DEBUG_LOGGING: env_vars ', env_vars)

  const client = new EventBridgeClient({ region: process.env.AWS_REGION })

  const params = {
    Entries: [{
      Detail: JSON.stringify(event),
      DetailType: 'ASSET_CREATED',
      Source: process.env.EVENT_SOURCE,
      EventBusName: process.env.PLATFORM_SERVICES_EVENT_BUS_ARN
    }]
  }
  const command = new PutEventsCommand(params)
  const response = await client.send(command)
  return response
}