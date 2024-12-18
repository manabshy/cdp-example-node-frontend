const products = [
  {
    id: '14be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Farmer Giles',
    name: 'Tractor',
    cost: '32000',
    condition: 'new',
    timestamp: '2023-04-14T14:40:02.242Z',
    description:
      'Brand new amazing tractor, 1 mile on the clock and very shiny.'
  },
  {
    id: '24be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'The Mason family',
    name: 'Digger',
    cost: '14000',
    condition: 'used',
    timestamp: '2022-01-17T11:40:02.242Z',
    description:
      'Used digger, digs great and is lots of fun to dig huge holes with. Comes with heater, comfy seat and radio.'
  },
  {
    id: '34be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Organic Farms Ltd.',
    name: 'Farm Master',
    cost: '7000',
    condition: 'new',
    timestamp: '2023-02-10T09:41:02.242Z',
    description:
      'Brand new Farm Master, to master your farm. You just need to press go and it will take care of the rest.'
  },
  {
    id: '44be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Farmer Agnes',
    name: 'Trailer',
    cost: '2000',
    condition: 'used',
    timestamp: '2023-03-01T17:45:02.242Z',
    description:
      'Used trailer, huge capacity to carry anything you need to cart around.'
  },
  {
    id: '54be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Worzel Gummidge',
    name: 'Combine Harvester',
    cost: '200000',
    condition: 'new',
    timestamp: '2023-01-05T09:01:02.242Z',
    description:
      'Brand new Combine Harvester. Yellow, big tyres with sat nav and radio. Collect your corn with a smile.'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Farmer McDermot',
    name: 'Bailer',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '54be9663-e19b-4dd1-b606-8fa1a5094ba5',
    owner: 'Worzel Gummidge',
    name: 'Plant Magnolia',
    cost: '200000',
    condition: 'new',
    timestamp: '2023-01-05T09:01:02.242Z',
    description:
      'Brand new Combine Harvester. Yellow, big tyres with sat nav and radio. Collect your corn with a smile.'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Popillia japonica Newman (Coleoptera: Scarabaeidae)',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Fleas',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Ants',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Cardinal beetle',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Worms',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Bugs',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Epitrix flea beetles',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Butterfiles',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Anoplophora chinensis (Forster)',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Bed Worms',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '64be9663-e19b-4dd1-b606-8fa1a50d94ba5',
    owner: 'Farmer McDermot',
    name: 'Bed bugs',
    cost: '10000',
    condition: 'old',
    timestamp: '2022-04-06T12:29:02.242Z',
    description:
      'Old but reliable Bailer for all your bailing needs. Bail like a pro with this farming stalwart!'
  },
  {
    id: '34be9663-e19b-4dd1-b606-8fa1da5094ba5',
    owner: 'Organic Farms Ltd.',
    name: 'Sunflower',
    cost: '7000',
    condition: 'new',
    timestamp: '2023-02-10T09:41:02.242Z',
    description:
      'Brand new Farm Master, to master your farm. You just need to press go and it will take care of the rest.'
  },
  {
    id: '34be9663-e19b-4dd1-b606-8fa1da5094ba5',
    owner: 'Organic Farms Ltd.',
    name: 'Bees',
    cost: '7000',
    condition: 'new',
    timestamp: '2023-02-10T09:41:02.242Z',
    description:
      'Brand new Farm Master, to master your farm. You just need to press go and it will take care of the rest.'
  }
]

module.exports = { products }
