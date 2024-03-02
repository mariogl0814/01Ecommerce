<script lang="ts" setup>

</script>
  
<template>
    <main class="contenido-principal contenedor ">
        <h2 class="text-center">Contacto</h2>

        <form class="formulario">
            <fieldset>
                <legend>Tus Datos</legend>
                
                <div class="campo">
                    <label for="nombre">Nombre: </label>
                    <input  id="nombre" type="text" placeholder="Tu Nombre" required>
                </div>

                <div class="campo">
                    <label for="asunto">Asunto:</label>
                    <input id="asunto" type="text" placeholder="Tu Asunto"  required>
                </div>

                <div class="campo">
                    <label for="email">E-mail:</label>
                    <input id="email" type="email" placeholder="Tu Email" >
                </div>

                <div class="campo">
                    <label for="tel">Teléfono:</label>
                    <input id="tel" type="tel" placeholder="Tu Teléfono" >
                </div>

                <div class="campo">
                    <label for="tel">Mensaje:</label>
                    <textarea rows="10" cols="20"></textarea>
                </div>

            </fieldset>

            <fieldset>
                <legend>País</legend>

                <div class="campo">
                    <label for="pais">País</label>
                    <select id="pais">
                        <option value="">-- Seleccione -- </option>
                        <option value="MX">México</option>
                        <option value="PR">Perú</option>
                        <option value="CO">Colombia</option>
                        <option value="AR">Argentina</option>
                        <option value="ES">España</option>
                        <option value="CL">Chile</option>
                    </select>

                </div>

            </fieldset>

            <fieldset>
                <legend>Información Extra</legend>
                
                <div class="campo">
                    <label for="cliente">Cliente</label>
                    <input id="cliente" type="radio" name="tipo" value="cliente">
                </div>

                <div class="campo">
                    <label for="proveedor">Proveedor</label>
                    <input id="proveedor" type="radio" name="tipo" value="proveedor">
                </div>

                <div class="campo">
                    <label for="categoria">Categoría de Interés</label>
                    <input list="categorias" name="categorias">

                </div>

            </fieldset>

            <input class="btn" type="submit" value="Enviar Formulario" >
        </form>
        
    </main>
</template>
  
<style scoped>
  
</style>
  