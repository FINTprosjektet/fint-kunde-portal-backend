class AssetApi {

  static fetchAssets(organisation) {
    const url = `/api/assets/${organisation}/`;
	  return fetch(url, {method: 'GET'})
      .then(response => Promise.all([response, response.json()]));
    
  }

  static createAsset(asset, organisation) {
    const request = new Request(`/api/assets/${organisation}/`, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: asset.description,  
        name: asset.name,
        assetId: asset.name
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateAsset(asset, organisation) {
    const request = new Request(`/api/assets/${organisation}/${asset.assetId}`, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: asset.description,
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

static deleteAsset(asset, organisation) {
    const request = new Request(`/api/assets/${organisation}/${asset.assetId}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


static addAdapterToAsset(adapter, asset, organisation) {

    const request = new Request(`/api/assets/${organisation}/${asset.assetId}/adapters/${adapter.name}`, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: adapter.name
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
static deleteAdapterFromAsset(adapter, asset, organisation) {

    const request = new Request(`/api/assets/${organisation}/${asset.assetId}/adapters/${adapter.name}`, {
      method: 'DELETE',
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

static addClientToAsset(client, asset, organisation) {

    const request = new Request(`/api/assets/${organisation}/${asset.assetId}/clients/${client.name}`, {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: client.name
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
static deleteClientFromAsset(client, asset, organisation) {

    const request = new Request(`/api/assets/${organisation}/${asset.assetId}/clients/${client.name}`, {
      method: 'DELETE',
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default AssetApi;