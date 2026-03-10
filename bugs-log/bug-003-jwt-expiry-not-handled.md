# Bug 003 - JWT Expiry Not Handled

## What broke
After token expired, API calls returned 401 but UI showed no error - silently stopped working.

## Why
No global 401 handler. Each component handled errors differently.

## Fix
Axios response interceptor catching 401 globally:
```js
api.interceptors.response.use(res => res, err => {
  if (err.response?.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(err);
});
```
