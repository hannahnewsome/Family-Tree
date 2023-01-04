import { createStore } from 'vuex'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, getAuth, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebaseConfig'

const store = createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
      userVerified: false
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_USER_VERIFIED(state, data) {
      state.user.userVerified = data;
    }
  },
  actions: {
    async register(context, { email, password, name}){
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if (response) {
            context.commit('SET_USER', response.user)
            updateProfile(response.user, {displayName: name})
            const auth = getAuth();
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  console.log('success');
                });
        } else {
            throw new Error('Unable to register user')
        }
    },

    async logIn(context, { email, password }){
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        if(!response.user.emailVerified){
          context.commit('SET_USER_VERIFIED', false)
          context.commit("SET_LOGGED_IN", false)
          context.commit('SET_USER', response.user)
        } else {
          context.commit('SET_USER', response.user)
          context.commit("SET_LOGGED_IN", response.user !== null)
          context.commit('SET_USER_VERIFIED', true)
        }
      } else {
          throw new Error('login failed')
      }
  },

  async logOut(context){
      await signOut(auth)
      context.commit('SET_USER', null)
  },

  async fetchUser(context ,user) {
    context.commit("SET_LOGGED_IN", user !== null);
    if (user) {
      context.commit("SET_USER", user);
    } else {
      context.commit("SET_USER", null);
    }
}
},
  modules: {
  }
});

const unsub = onAuthStateChanged(auth, (user) => {
  const userLoggedIn = (user) ? true : false;
  store.commit('SET_LOGGED_IN', userLoggedIn);
  store.commit('SET_USER', user);
  unsub();
})

export default store