function parseHTML(html) {
  const parser = new DOMParser(html);
  return parser.parseFromString(html, 'text/html');
}

document.getElementById('scrapeButton').addEventListener('click', async () => {
  const loadingIndicator = document.getElementById('loading');
  loadingIndicator.classList.remove('hidden');

  const title = document.getElementById('title-header');
  title.classList.add('hidden');
  const data = []

  try {

    const url = 'https://www.amazon.com';

    const res = await fetch(url);
    const html = await res.text();


    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');

    // const dom = new JSDOM(html);
    // const document = dom.window.document;

    const page = document.querySelector("#a-page")?.innerHTML
    if (page.length < 10) throw new Error('Error in parsng page not found')

    const parsedPage = parseHTML(page)
    const layout = parsedPage.querySelector("#gw-layout")
    const cardLayout = layout.querySelector("#gw-card-layout")
    const gridLayout = layout.querySelector("#gw-content-grid")


    if (cardLayout.innerHTML.length > 0) {
      const list1 = cardLayout.querySelector("#desktop-grid-1")
      const list2 = cardLayout.querySelector("#desktop-grid-2")
      const list3 = cardLayout.querySelector("#desktop-grid-3")
      const list4 = cardLayout.querySelector("#desktop-grid-4")
      const list5 = cardLayout.querySelector("#desktop-grid-5")
      const list6 = cardLayout.querySelector("#desktop-grid-6")
      const list7 = cardLayout.querySelector("#desktop-grid-7")
      const list8 = cardLayout.querySelector("#desktop-grid-8")
      const listData = []


      if (list1.innerHTML.length > 0) {
        const headline = list1.querySelector(".a-cardui-header .headline");

        const items = list1.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');
          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }

      if (list2.innerHTML.length > 0) {
        const headline = list2.querySelector(".a-cardui-header .headline");

        const items = list2.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");

        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');
          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }

      if (list3.innerHTML.length > 0) {
        const headline = list3.querySelector(".a-cardui-header .headline");

        const items = list3.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }

      if (list4.innerHTML.length > 0) {
        const headline = list4.querySelector(".a-cardui-header .headline");

        const items = list4.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }
      if (list5.innerHTML.length > 0) {
        const headline = list5.querySelector(".a-cardui-header .headline");

        const items = list5.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }
      if (list6.innerHTML.length > 0) {
        const headline = list6.querySelector(".a-cardui-header .headline");

        const items = list6.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }
      if (list7.innerHTML.length > 0) {
        const headline = list7.querySelector(".a-cardui-header .headline");

        const items = list7.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }
      if (list8.innerHTML.length > 0) {
        const headline = list8.querySelector(".a-cardui-header .headline");

        const items = list8.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          listData.push(payload)
        });
      }

      data.push(...listData)
    }

    if (gridLayout.innerHTML.length > 0) {
      const mainGrid = gridLayout.querySelector("#main-content")

      const btfList1 = mainGrid.querySelector("#desktop-btf-grid-1")
      const btfList2 = mainGrid.querySelector("#desktop-btf-grid-2")
      const btfList3 = mainGrid.querySelector("#desktop-btf-grid-3")
      const btfList4 = mainGrid.querySelector("#desktop-btf-grid-4")
      const btfList5 = mainGrid.querySelector("#desktop-btf-grid-5")
      const btfList6 = mainGrid.querySelector("#desktop-btf-grid-6")
      const btfList7 = mainGrid.querySelector("#desktop-btf-grid-7")
      const btfList8 = mainGrid.querySelector("#desktop-btf-grid-8")
      const btfList9 = mainGrid.querySelector("#desktop-btf-grid-9")
      const btfList10 = mainGrid.querySelector("#desktop-btf-grid-10")
      const btfList11 = mainGrid.querySelector("#desktop-btf-grid-11")
      const btfList12 = mainGrid.querySelector("#desktop-btf-grid-12")

      const gridData = []

      if (btfList1.innerHTML.length > 0) {
        const headline = btfList1.querySelector(".a-cardui-header .headline");

        const items = btfList1.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }

      if (btfList2.innerHTML.length > 0) {
        const headline = btfList2.querySelector(".a-cardui-header .headline");

        const items = btfList2.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList3.innerHTML.length > 0) {
        const headline = btfList3.querySelector(".a-cardui-header .headline");

        const items = btfList3.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList4.innerHTML.length > 0) {
        const headline = btfList4.querySelector(".a-cardui-header .headline");

        const items = btfList4.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList5.innerHTML.length > 0) {
        const headline = btfList5.querySelector(".a-cardui-header .headline");

        const items = btfList5.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList6.innerHTML.length > 0) {
        const headline = btfList6.querySelector(".a-cardui-header .headline");

        const items = btfList6.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList7.innerHTML.length > 0) {
        const headline = btfList7.querySelector(".a-cardui-header .headline");

        const items = btfList7.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList8.innerHTML.length > 0) {
        const headline = btfList8.querySelector(".a-cardui-header .headline");

        const items = btfList8.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList9.innerHTML.length > 0) {
        const headline = btfList9.querySelector(".a-cardui-header .headline");

        const items = btfList9.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList10.innerHTML.length > 0) {
        const headline = btfList10.querySelector(".a-cardui-header .headline");

        const items = btfList10.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList11.innerHTML.length > 0) {
        const headline = btfList11.querySelector(".a-cardui-header .headline");

        const items = btfList11.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }
      if (btfList12.innerHTML.length > 0) {
        const headline = btfList12.querySelector(".a-cardui-header .headline");

        const items = btfList12.querySelectorAll("._fluid-quad-image-label-v2_style_quadrantContainer__3TMqG");
        items.forEach((item) => {
          const img = item.querySelector('img');
          const label = item.querySelector('span');

          const link = item.querySelector('a').getAttribute("href");

          const payload = {
            header: headline.textContent.trim(),
            label: label.textContent.trim(),
            imageUrl: img.src,
            link: link.length > 0 ? url + link : url
          }

          gridData.push(payload)
        });
      }

      data.push(...gridData)
    }

    if (data.length > 1) {
      chrome.runtime.sendMessage({ action: "fetchData", data: data }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          alert('Error while sending message to background script.');
          return;
        }

        if (response.error) {
          console.error('Error:', response.error);
          alert('Error while sending data to server.');
        } else {
          console.log("Received data:", response.data);
        }
      });

      alert(`${data.length} data scrapped and sent to server.`)

    }
    else alert("No data found.")

  } catch (error) {
    console.log("Error", error)
    alert(`Error while scrapping data.`)
  } finally {
    loadingIndicator.classList.add('hidden');
    title.classList.remove('hidden');
  }
});
