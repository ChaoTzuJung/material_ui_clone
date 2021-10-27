import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem('currentUser') as string)
);

const login = (username: string): void => {
  localStorage.setItem('currentUser', JSON.stringify(username));
  currentUserSubject.next(username);
};

const logout = (): void => {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
};

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue(): BehaviorSubject<string> {
    return currentUserSubject.value;
  }
};
