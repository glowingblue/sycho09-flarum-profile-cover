import CoverSettingsModal from './components/CoverSettingsModal';

app.initializers.add('sycho-profile-cover', (app) => {
  app.extensionSettings['sycho-profile-cover'] = () => app.modal.show(CoverSettingsModal);
});
