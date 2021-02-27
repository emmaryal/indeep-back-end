var admin = require("firebase-admin");

var serviceAccount = require("./../config/fbServiceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL:
//     "https://indeep-3ec84-default-rtdb.europe-west1.firebasedatabase.app",
// });

admin.initializeApp({
  credential: admin.credential.cert({
  
    "project_id": "indeep-3ec84",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCBSrfFnk+tIUX0\nYMUjIkcaGv3kAHTf1hBWu8rskf1MA9iBuJPtoxtwPIz5hPDlDKkg6IHd3QXpc/sx\nzwJoZ81oNJlwpiwac52eCBlUw9Gxh2fhZW01dkwTaQ0kg9BQh2g34ARy/sQqBtPS\ncFFr6xzVrRUXU0LVOqPHGq6KjK/iIPhfqe8azoT5moK29P6hA/KVcqmMB+2+f8/L\nGZ/bjJNNDpa0gCSZjmSb6gZuKyxB6+JwI7vlGbJ5a8ICVAU5T09O7D3Jy2iohE/U\nsDqSArgdrLEOVaZoqDtVv2qe7QUS8s5qvBsriGU8LnejFVNMtK/HshoqUNiL8PLH\nhLZbE427AgMBAAECggEAOmAX9VvzMYIyaZI/sAtL+xdwxr8GBgJKwj5r8sA/k1Cx\nMnC6KbNZMiXEqOxDL8e1nSwdZqTihHNfWS/UMHudnI0TMm90vkSxR6b0ePco+HTg\njD4VPuw4kRL/Yhs5tQJOJdw5ZgptW2RVw0//EzDGhhttyGhJZqjhRYZghCHdT8Va\n1XVZKUIhV62THbky0QXvD2aBy59jTeFVzZCXHVk64sA9ppinLPRCGHJmz2xcI9OG\ndRAD3ZvMY0jUba3LmYQxxUu2lU9kePOTUyigw0MmQuu8XvxxSBjTVD8bkp7imczX\ncZu0R+/5khlgSEONfWa5Mnc8yeo8KD31zok0mZ+UgQKBgQC2ywTOxFzz6umEzfIZ\nfoTBho3Wmxeoc0MNVNVY9Dsv5fCcDg3qAFiLedQXJXZFI5pllPBPyGmfuyxW+By3\nYc9tD0ONgWaEwPtLxwZATzRhM3jFXQiIeII9Bcxj668MxmO620iRN4kg/v+XRkiA\nlno6tTUz+JZzNMbJc2MvtZEg4QKBgQC1EnRgxPKXScYPaOVn5IcdoewiA/HJC94h\np/U69wa0td8LSd8r5OqfUTcTn0OfdunOCZqTW91NvM0Qa0AH9dndxYVAuHd+Nfy8\now9JxRUG544yghLslbike39fn5TsyVqerHnfbwmeO2SHuLuthOUup8r+pqL3fvpr\n8QKCR2nWGwKBgFca+5mEXT8mzEyqzxly/tQxyFlh4q407tjleh0/lQzIKBZVZDAE\nJi2gyn6VLXzY8HRDuxhpyluBmCmBZj3E8FFqGqjN5wqP47BCkSoIFE/VdVGnea9+\nraFip/ldkDcoOtIKONRqgIAmw6lUpqwQCQL84vN3HEqd9bR9teBAR35BAoGBAKWH\n4Ww1n7A+eRnNQyre98ZXKI9QG9E3UDJkYQMuoKrDOMwRFDwEYZiTnk4J4r/87XC1\nxuG/sWhHmQ/RfA/K6QiccVzhRhvTLuEkD+3YhYhyVsRFtRcjKFD1tVOth2+QA4/b\nDO79i0Vj9ls8vhW6z+j+68wwefrX0garpSeEMXTRAoGAUSmSFhFycDRq0qkXJAU7\n3iAdejGsC8P3wLiM1nDo//svPPsACdZPovIGEys0cs+H46eOYtFAdIT+m2jNqk0k\nih5nevhxUr+2ko8y38L3oWkhL4wVlv9RPaHKuqMH8Xd4tp/Xgvv+A1KDmeP4Qom6\n0qXzse5bzF/Cbj3lfuLVB5g=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-lslt7@indeep-3ec84.iam.gserviceaccount.com"
  }),
  databaseURL:
    "https://indeep-3ec84-default-rtdb.europe-west1.firebasedatabase.app",
});







module.exports = admin;
