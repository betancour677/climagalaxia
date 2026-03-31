<template>
  <div class="login-view container">
    <div class="auth-card">
      <h2 class="auth-title">Iniciar Sesión</h2>
      <p class="auth-subtitle">Accede a tus preferencias de la galaxia</p>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email">Correo Galáctico</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="ej: luke@rebellion.com"
            required
            :disabled="isLoading"
          />
        </div>

        <div class="form-group">
          <label for="password">Clave de Seguridad</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="••••••••"
            required
            :disabled="isLoading"
          />
        </div>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>

        <button type="submit" class="auth-btn" :disabled="isLoading">
          <span v-if="!isLoading">Identificarse</span>
          <span v-else class="spinner-small"></span>
        </button>
      </form>

      <div class="auth-footer">
        <p>¿Eres un nuevo recluta? <router-link to="/registro">Regístrate</router-link></p>
        <div class="auth-hints">
           <p><strong>Cuentas de Prueba:</strong></p>
           <p>Email: <code>luke@rebellion.com</code> / Clave: <code>force</code></p>
           <p>Email: <code>han@falcon.com</code> / Clave: <code>kesselrun</code></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    await store.dispatch('login', {
      email: email.value,
      password: password.value
    })
    
    // Redirigir a Home o a la última ruta visitada (si existía redirect)
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } catch (error) {
    errorMessage.value = error.message || 'Error en la conexión.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-3xl) 0;
  min-height: calc(100vh - 200px);
}

.auth-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  width: 100%;
  max-width: 420px;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.auth-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: var(--space-xs);
  text-align: center;
}

.auth-subtitle {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: var(--space-xl);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-group label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-muted);
}

.form-group input {
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-family: var(--font-main);
  outline: none;
  transition: all var(--transition-fast);
}

.form-group input:focus {
  border-color: var(--color-accent);
  background: rgba(255, 255, 255, 0.05);
}

.auth-btn {
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px var(--color-accent-glow);
}

.auth-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #ff4d4d;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
}

.auth-footer {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.auth-footer a {
  font-weight: 600;
  color: var(--color-accent);
}

.auth-hints {
  margin-top: var(--space-lg);
  background: rgba(255, 255, 255, 0.02);
  padding: 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  text-align: left;
}

.auth-hints code {
  color: var(--color-accent);
}

.spinner-small {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
