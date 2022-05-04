const nums1 = [1, 2, 2, 1, 8];
const nums2 = [2, 2, 8];
var common = [];
var icurrent = [];
var jcurrent = [];

function intersection(nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    icurrent.push(nums1[i]);
    for (let j = 0; j < nums2.length; j++) {
      jcurrent.push(nums2[j]);
      if (nums1[i] === nums2[j] && icurrent[i - 1] != jcurrent[j]) {
        common.push(nums1[i]);
      }
    }
  }
}

intersection(nums1, nums2);
console.log(common);
