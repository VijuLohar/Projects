var FS = FS || {};

FS.Viewer3D = {
        MobileCRM.UI.EntityForm.onChange(FS.Viewer3D.setModelSource, true, null);
    },
        var localizedTitle = localization && localization.get("Title.Viewer3D");
        if (localizedTitle) {
            document.title = localizedTitle;
        }
    },
        this.URL = url;
    },
        var binaryContent = window.atob(base64content);
            typedArray[i] = binaryContent.charCodeAt(i);
        }
    },
        var storageType = entityForm.entity.properties[FS.Schema.ThreeDimensionalModel.properties.msdyn_storageType];
            FS.Viewer3D.getFileFromNotes(entityForm, function (result) {
            });
        }
            var fileFromRecord = FS.Viewer3D.getFileFromEntity(entityForm);
                FS.Viewer3D.setViewerModelSource(fileFromRecord);
            }
        }
    },
        var loaderTypes = {};
            return null;
        }
    },
        var fetchNotes = new MobileCRM.FetchXml.Entity(FS.Schema.Annotation.name);
    },
        var entityId = entityForm && entityForm.entity && entityForm.entity.id;
            return;
        }
            if (results && results[0]) {
                fetchedNote = results[0];
                    if (documentBody && fetchedNote) {
                        var entity = fetchedNote;
                            callback(new FS.Viewer3D.ModelSource(reader.result, extension));
                        };
                    }
                },
                        MobileCRM.bridge.alert(error);
                    }, null);
            }
        },
                MobileCRM.bridge.alert(error);
            }, null);
    },
        var modelUrl = source && source.URL;
            var config = {
                extends: 'minimal',
                    url: modelUrl,
                    normalize: true,
                    animation: {
                        autoStart: true
                    }
                },
                camera: {}
            };
        }
};