import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '..';

async function create() {
  const id = uuidV4();
  const password = await hash('admin@back', 8);

  const connection = await createConnection('localhost');

  const query = `INSERT INTO USERS(id, name, email, password, "is_admin")
  values('${id}', 'BackOffice Admin', 'admin@backoffice.com.br', '${password}', true)
  `;

  console.log(query);

  connection.query(query);

  await connection.close();
}

create().then(() => console.log('User admin created'));
