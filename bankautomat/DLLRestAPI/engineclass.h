#ifndef ENGINECLASS_H
#define ENGINECLASS_H

#include <myurl.h>

#include <QString>
#include <QDebug>
#include <QObject>

#include <QtNetwork>
#include <QNetworkAccessManager>
#include <QJsonDocument>

class EngineClass : public QObject
{
    Q_OBJECT
public:
    EngineClass(QObject *parent = nullptr);
    void loginhttp();
protected:

private:
    MyURL *objectMyUrl;
    QString base_url;

    //Login variables
    QNetworkAccessManager *loginManager;
    QNetworkReply *reply;
    QByteArray response_data;
    QByteArray token;
    QString _testKorttiNum = "901234";
    QString _testPin = "1234";
private slots:
    void loginSlot(QNetworkReply *reply);
};

#endif // ENGINECLASS_H
