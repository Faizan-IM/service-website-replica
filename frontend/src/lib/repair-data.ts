import { Refrigerator, WashingMachine, ThermometerSun, UtensilsCrossed, Flame, Snowflake, Waves, Droplets } from 'lucide-react';

export type ApplianceInfo = {
    title: string;
    desc: string;
    issues: string[];
};

export const applianceData: Record<string, ApplianceInfo> = {
    refrigerator: {
        title: 'Refrigerator Repair',
        desc: 'Is your fridge not cooling or leaking water? Our experts can fix compressor issues, seal problems, and ice maker failures quickly.',
        issues: ['Not cooling properly', 'Water leaking on floor', 'Ice maker not working', 'Strange noises', 'Frost buildup']
    },
    'ice-maker': {
        title: 'Ice Maker Repair',
        desc: 'Ice machine stopped working? We repair standalone and refrigerator-integrated ice makers.',
        issues: ['No ice production', 'Leaking water', 'Ice tasting bad', 'Loud noises', 'Frozen mechanism']
    },
    'trash-compactor': {
        title: 'Trash Compactor Repair',
        desc: 'Compactor ram stuck or not crushing? We can get it working again efficiently.',
        issues: ['Ram stuck', 'Won’t start', 'Making loud noise', 'Drawer won’t open', 'Bad odors']
    },
    washer: {
        title: 'Washing Machine Repair',
        desc: 'From spin cycle failures to drainage issues, we get your laundry routine back on track.',
        issues: ['Won’t spin or agitate', 'Water not draining', 'Leaking water', 'Excessive vibration', 'Door won’t lock']
    },
    'washing-machine': { // Alias for washer
        title: 'Washing Machine Repair',
        desc: 'From spin cycle failures to drainage issues, we get your laundry routine back on track.',
        issues: ['Won’t spin or agitate', 'Water not draining', 'Leaking water', 'Excessive vibration', 'Door won’t lock']
    },
    dryer: {
        title: 'Dryer Repair',
        desc: 'Don’t let damp clothes pile up. We fix heating elements, belts, and control boards.',
        issues: ['Not heating up', 'Drum not turning', 'Takes too long to dry', 'Overheating', 'Error codes']
    },
    'dryer-vent-cleaning': {
        title: 'Dryer Vent Cleaning',
        desc: 'Prevent fire hazards and improve efficiency with professional dryer vent cleaning.',
        issues: ['Clothes taking long to dry', 'Dryer very hot', 'Burning smell', 'Lint buildup', 'Airflow restriction']
    },
    dishwasher: {
        title: 'Dishwasher Repair',
        desc: 'Spotty glasses or puddles on the floor? We repair pumps, spray arms, and control panels.',
        issues: ['Not cleaning dishes', 'Not draining', 'Leaking', 'Buttons not working', 'Bad odors']
    },
    oven: {
        title: 'Oven Repair',
        desc: 'Cooking shouldn’t be a hassle. We repair electric and gas ovens, burners, and temperature sensors.',
        issues: ['Oven not heating', 'Burner won’t light', 'Temperature inaccurate', 'Door won’t close', 'Self-clean failure']
    },
    range: {
        title: 'Range & Stove Repair',
        desc: 'Burners not lighting or heating unevenly? We service gas and electric ranges.',
        issues: ['Clicking burner', 'Smell of gas', 'Element not heating', 'Knob broken', 'Glass top cracked']
    },
    cooktop: {
        title: 'Cooktop Repair',
        desc: 'We repair induction, gas, and electric cooktops. Get back to cooking your favorite meals.',
        issues: ['Won’t turn on', 'Indicator light stays on', 'Coils damaged', 'Sparking', 'Cracked surface']
    },
    freezer: {
        title: 'Freezer Repair',
        desc: 'Save your frozen food from spoiling. We fix thermostats, compressors, and defrost heaters.',
        issues: ['Not freezing', 'Frost buildup', 'Constant running', 'Clicking sounds', 'Leaking water']
    },
    hvac: {
        title: 'HVAC Repair',
        desc: 'Keep your home comfortable year-round. We repair AC units, furnaces, and heat pumps.',
        issues: ['Not cooling/heating', 'Strange noises', 'Bad smells', 'Thermostat issues', 'Weak airflow']
    },
    'central-air': { // Alias/Specific for HVAC
        title: 'Central Air Repair',
        desc: 'Stay cool during summer. We repair central air conditioning units efficiently.',
        issues: ['Not cooling', 'Fan not spinning', 'Leaking refrigerant', 'Thermostat issues', 'Loud banging']
    },
    furnace: {
        title: 'Furnace Repair',
        desc: 'Stay warm when it matters most. Expert furnace repair for gas and electric models.',
        issues: ['No heat', 'Pilot light out', 'Blower not working', 'Short cycling', 'Carbon monoxide alarm']
    },
    'water-heater': {
        title: 'Water Heater Repair',
        desc: 'No hot water? Leaking tank? We service tankless and traditional water heaters.',
        issues: ['No hot water', 'Leaking', 'Rust colored water', 'Making noise', 'Pilot light out']
    },
    'water-softener': {
        title: 'Water Softener Repair',
        desc: 'Hard water ruining your pipes? We repair water softeners and filtration systems.',
        issues: ['Water tastes bad', 'Salt bridging', 'Not regenerating', 'Low water pressure', 'Resin bead leak']
    },
    humidifier: {
        title: 'Humidifier Repair',
        desc: 'Maintain proper home humidity. We repair whole-home humidifiers.',
        issues: ['Not adding humidity', 'Leaking water', 'Mold growth', 'Clogged filter', 'Noisy operation']
    },
    'riding-mower': {
        title: 'Riding Mower Repair',
        desc: 'Get your lawn back in shape. We fix engine start issues, cutting deck problems, and transmission failures.',
        issues: ['Won’t start', 'Cutting unevenly', 'Belt broken', 'Leaking oil', 'Vibrating excessively']
    },
    'snow-blower': {
        title: 'Snow Blower Repair',
        desc: 'Be ready for the next storm. We repair augers, engines, and drive systems.',
        issues: ['Won’t start', 'Auger not turning', 'Wheels not spinning', 'Leaking gas', 'Vibration']
    },
    grill: {
        title: 'Grill & BBQ Repair',
        desc: 'Get back to grilling. We repair burners, igniters, and gas connections.',
        issues: ['Low flame', 'Uneven heating', 'Igniter broken', 'Gas leak', 'Rusted grates']
    },
    'patio-heater': {
        title: 'Patio Heater Repair',
        desc: 'Extend your outdoor season. We repair propane and electric patio heaters.',
        issues: ['Won’t light', 'Stay lit failure', 'Low heat output', 'Tip-over switch fail', 'Gas smell']
    },
    boiler: {
        title: 'Boiler Repair',
        desc: 'Stay warm this winter. We repair radiator issues, thermostat failures, and pressure problems.',
        issues: ['No heat', 'Leaking water', 'Strange noises', 'Low pressure', 'Pilot light goes out']
    }
};

export interface Company {
    slug: string;
    name: string;
    description: string;
    bgImage: string; // Placeholder color or URL
    products: string[]; // List of appliance slugs
}

export const COMPANIES: Company[] = [
    {
        slug: 'kenmore',
        name: 'Kenmore',
        description: 'America’s trusted brand for over 100 years. We offer certified repair for all Kenmore appliances.',
        bgImage: 'bg-blue-900',
        products: ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'freezer', 'range', 'cooktop']
    },
    {
        slug: 'ge',
        name: 'GE Appliances',
        description: 'Innovative technology meets reliable performance. Expert service for your GE kitchen and laundry suite.',
        bgImage: 'bg-slate-800',
        products: ['refrigerator', 'dishwasher', 'oven', 'washer', 'dryer', 'range']
    },
    {
        slug: 'samsung',
        name: 'Samsung',
        description: 'Smart features require smart technicians. We specialize in Samsung digital inverter technology.',
        bgImage: 'bg-blue-600',
        products: ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'range']
    },
    {
        slug: 'lg',
        name: 'LG',
        description: 'Life’s Good when your appliances work. We fix LG Direct Drive motors and Craft Ice makers.',
        bgImage: 'bg-red-700',
        products: ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven']
    },
    {
        slug: 'whirlpool',
        name: 'Whirlpool',
        description: 'Helping you care for your family. Reliable repairs for all Whirlpool home appliances.',
        bgImage: 'bg-yellow-600',
        products: ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'cooktop']
    },
    {
        slug: 'maytag',
        name: 'Maytag',
        description: 'Built strong to last long. We keep your Maytag appliances running like new.',
        bgImage: 'bg-blue-800',
        products: ['washer', 'dryer', 'refrigerator', 'dishwasher']
    }
];

export const BRANDS = COMPANIES.map(c => c.slug);
