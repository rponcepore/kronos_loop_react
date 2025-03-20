// Define the Plan type
export type Plan = {
    id: number;
    name: string;
    fiscal_year: number;
    serial_number: number;
  };

// Function to serialize 
export const serializeToPlan = (json: any): Plan => {
  return {
    id: json.id,
    name: json.name,
    fiscal_year: json.fiscal_year,
    serial_number: json.serial_number,
  };
};

export const plans_list: Plan[] = [{
    id: 0,
    name: 'JRTC',
    fiscal_year: 24,
    serial_number: 1,
  }, {
    id: 1,
    name: 'Gimlet Quarry',
    fiscal_year: 24,
    serial_number: 2,
  }, {
    id: 2,
    name: 'Midnight Anvil',
    fiscal_year: 25,
    serial_number: 1,
  }, {
    id: 3,
    name: 'Lightning Forge',
    fiscal_year: 25,
    serial_number: 2,
  }, {
    id: 4,
    name: 'Battalion LFX',
    fiscal_year: 25,
    serial_number: 3,
  }];
  