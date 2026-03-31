<template>
  <div class="registro-view container">
    <div class="auth-card">
      <h2 class="auth-title">Crear Cuenta</h2>
      <p class="auth-subtitle">Únete a la Rebelión Climática</p>

      <form @submit.prevent="handleRegistro" class="auth-form">
        <div class="form-group">
          <label for="name">Nombre Completo</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            placeholder="ej: Leia Organa"
            required
            :disabled="isLoading"
          />
        </div>

        <div class="form-group">
          <label for="email">Correo Galáctico</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="ej: leia@rebellion.com"
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
            minlength="4"
            :disabled="isLoading"
          />
        </div>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>

        <button type="submit" class="auth-btn" :disabled="isLoading">
          <span v-if="!isLoading">Registrarse</span>
          <span v-else class="spinner-small"></span>
        </button>
      </form>

      <div class="auth-footer">
        <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia Sesión</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleRegistro = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // Simulación de registro exitoso
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.')
    router.push('/login')
  } catch (error) {
    errorMessage.value = 'Error al procesar el registro.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Compartimos los mismos estilos que LoginView (podrían estar en main.css) */
.registro-view {
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
