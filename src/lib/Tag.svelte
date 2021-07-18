<script>
export let name;
export let color;
</script>

<div class="tag" style="background-color: {color};">
    {name}
</div>

<style>
  .tag {
    padding: 8px 25px;
    border-radius: 46px;
    display: inline-block;
    margin-right: 15px;
    color: #fff;
    font-weight: 500;
  }

</style>