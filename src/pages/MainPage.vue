<template>
  <div class="wrapper">
    <div class="descriprion">
      <h1 class="descriprion__title h1">Мои заметки</h1>
      <h3 class="descriprion__subtitle h3">
        Не забывай о важном, храни его в облаке.
      </h3>
    </div>
    <img src="../assets/main.svg" alt="main" class="img" />
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  padding: 0 160px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1366px) {
    padding: 0 80px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 779px) {
    padding: 20px 20px 0 20px;
  }
}

.descriprion {
  display: flex;
  width: 642px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--40, 40px);

  &__subtitle {
    width: 394px;
    color: var(--gray);
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    &__subtitle {
      width: 100%;
    }
  }
  @media (max-width: 759px) {
    width: 320px;
  }
}

.img {
  @media (max-width: 1599px) {
    height: 604px;
  }
  @media (max-width: 1200px) {
    height: 540px;
  }
  @media (max-width: 576px) {
    height: 287px;
  }
}
</style>
