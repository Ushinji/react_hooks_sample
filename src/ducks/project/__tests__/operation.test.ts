// import * as fetchMock from 'fetch-mock';
// import { updateProject } from '../operation';

// describe('updateProject', () => {
//   it('指定APIへリクエストを行うこと', async () => {
//     fetchMock.post(
//       (url, opts) => {
//         return (
//           url === `/projects/${1}` &&
//           opts.body ===
//             JSON.stringify({
//               displayName: 'UPDATE_DISPALY',
//             })
//         );
//       },
//       {
//         body: {},
//       }
//     );

//     await updateProject(1, 'TEST_DISPALY_NAME');

//     fetchMock.restore();
//   });
// });
