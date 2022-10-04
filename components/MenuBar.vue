<script setup lang="ts">
import IconMenu from '~icons/mdi/menu'
import IconBusSide from '~icons/mdi/bus-side'
import IconReport from '~icons/mdi/phone-alert'
import IconInformation from '~icons/mdi/information'
</script>

<template>
  <div class="menu-bar">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <IconMenu style="font-size: 1.5em" />
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li class="mb-2">
              <label for="modal-track">
                <IconBusSide style="font-size: 1.5em" />
                ติดตามสถานะรถตะลัย
              </label>
              <label for="modal-report">
                <IconReport style="font-size: 1.5em" />
                แจ้งปัญหา
              </label>
            </li>
            <hr />
            <li class="mt-2">
              <label for="modal-project-info">
                <IconInformation />เกี่ยวกับ Project
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="normal-case text-xl">ตะลัยแมพ ( Talai Map )</a>
      </div>
      <div class="navbar-end"></div>
    </div>
  </div>
  <div class="modal-view">
    <input type="checkbox" id="modal-track" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="modal-track"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">⌚ สถานะรถตะลัย</h3>
        <div class="status-body text-center">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-value mt-4">สาย 1</div>
            </div>
            <div class="stat">
              <div class="stat-title">คันที่ใกล้ที่สุด</div>
              <div class="stat-value text-primary">2 นาที</div>
              <div class="stat-desc">🚶 อยู่ห่างออกไป {{ '<1' }} กม.</div>
            </div>
          </div>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-value mt-4">สาย 2</div>
            </div>
            <div class="stat">
              <div class="stat-title">คันที่ใกล้ที่สุด</div>
              <div class="stat-value text-accent">15 นาที</div>
              <div class="stat-desc">🚶 อยู่ห่างออกไป {{ '~2' }} กม.</div>
            </div>
          </div>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-value mt-4">สาย 3</div>
            </div>
            <div class="stat">
              <div class="stat-title">คันที่ใกล้ที่สุด</div>
              <div class="stat-value text-red-600">44 นาที</div>
              <div class="stat-desc">🚶 อยู่ห่างออกไป {{ '~4' }} กม.</div>
            </div>
          </div>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-value mt-4">สาย 4</div>
            </div>
            <div class="stat">
              <div class="stat-title">คันที่ใกล้ที่สุด</div>
              <div class="stat-value">.. นาที</div>
              <div class="stat-desc">🚶 อยู่ห่างออกไป {{ '~0' }} กม.</div>
            </div>
          </div>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-value mt-4">สาย 5</div>
            </div>
            <div class="stat">
              <div class="stat-title">คันที่ใกล้ที่สุด</div>
              <div class="stat-value">.. นาที</div>
              <div class="stat-desc">🚶 อยู่ห่างออกไป {{ '~0' }} กม.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input type="checkbox" id="modal-report" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="modal-report"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold">📣 แจ้งปัญหา</h3>
        <p class="py-4">Coming soon :)</p>
      </div>
    </div>
  </div>
</template>
