import {faker} from '@faker-js/faker';
import add from 'date-fns/add';

const createArrayOf = (
  length: number,
  mappingFunction: (index: number) => any
) => {
  return Array(length)
    .fill(0)
    .map((_, index) => mappingFunction(index));
};

const data = {
  patients: createArrayOf(101, (index) => {
    let patient: Record<string, any> = {
      id: index,
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      intervention: faker.date.between(
        add(new Date(), {months: -1}),
        add(new Date(), {months: 2})
      ),
    };

    // Let's create 9 pairs of legs (L1, R1, L2, R2, etc.) and give all those legs 93% probability of being sound
    const soundProbability = 93;
    let i = 0;
    while (i < 17) {
      patient[`L${i + 1}`] =
        faker.datatype.float({min: 0, max: 100}) > soundProbability;
      patient[`R${i + 1}`] =
        faker.datatype.float({min: 0, max: 100}) > soundProbability;
      i++;
    }
    return patient;
  }),
};

export default data;
